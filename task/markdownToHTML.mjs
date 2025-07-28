import {marked} from 'marked'
import {readFile, writeFile} from 'fs/promises'
import {JSDOM} from 'jsdom'

(async function(){
  const readmeMarkdown = await readFile('README.md', 'utf-8')
  const readmeHTML = markdownToAnchoredSections(readmeMarkdown)
  const readmeDOM = new JSDOM(readmeHTML)

  const indexHTML = await readFile('docs/_index.html', 'utf-8')
  const indexDOM = new JSDOM(indexHTML)
 
  const allIds = readmeDOM.window.document.querySelectorAll(`[id]`)
  Array.from(allIds).forEach(elm=>{
    const {id} = elm
    const oldSection = indexDOM.window.document.getElementById(id)
    if (oldSection){
      oldSection.insertAdjacentElement('afterend', elm)
      oldSection.remove()
      const example = oldSection.querySelector('.example')
      example&&elm.appendChild(example)
    }
  })

  const indexString = indexDOM.serialize()
  await writeFile('docs/index.html', indexString)
})()

// Custom renderer
const renderer = new marked.Renderer();

renderer.heading = function(options){
  const {type, raw, depth, text, tokens} = options
  const id = slugify(text);
  return `<h${depth}>${text}<a href="#${id}" class="anchor-link">#</a></h${depth}>\n`;
};

function slugify(str) {
  return str.toLowerCase().replace(/[^\w]+/g, '-')
}

function markdownToAnchoredSections(md) {
  const tokens = marked.lexer(md);
  const sections = [];
  let currentSection = null;

  for (const token of tokens) {
    if (token.type === 'heading') {
      if (currentSection) sections.push(currentSection);
      currentSection = {
        id: slugify(token.text),
        tokens: [token]
      };
    } else if (currentSection) {
      currentSection.tokens.push(token);
    }
  }

  if (currentSection) sections.push(currentSection);

  return sections.map(section => {
    const html = marked.parser(section.tokens, { renderer });
    return `<section id="${section.id}">\n${html}</section>\n`;
  }).join('\n');
}

