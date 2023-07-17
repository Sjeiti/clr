const parent = ['context', 'it', 'describe', 'test']

module.exports = {
  // meta: {
  //   docs: {
  //     description: 'The expression `.only(` should only be used while developing. It should never be committed.',
  //     category: 'Best Practices',
  //     recommended: true
  //   },
  //   schema: []
  // }
  create(context) {
    return {
      MemberExpression(node){
        const {object: {name}, property: {name:call}} = node
        const isOnly = call==='only'&&parent.includes(name)
        isOnly&&context.report({
          node
          , message: 'The expression `.only(` should never be committed.'
          , fix(fixer) {
            const [from, to] = node.property.range
            const propertyRange = [from-1, to]
            return fixer.removeRange(propertyRange)
          }
        })
      }
    }
  }
}
