module.exports = {
  create(context) {
    const code = context.getSourceCode()
    return {
      CallExpression: (node)=>{
        const {callee, parent} = node
        const isConsoleLog = callee.object?.name==='console'&&callee.property?.name==='log'
        const {trailing} = isConsoleLog&&code.getComments(node)||{}
        const remove = trailing?.filter(({value})=>/^\stodo:\sremove\slog$/.test(value))||[]
        const hasRemoveLog = remove.length
        hasRemoveLog&&context.report({
          node
          , message: 'Logs marked for removal should be removed'
          , fix(fixer) {
            const hasLogicalParent = ['&&', '||'].includes(parent?.operator)
            const [from] = (hasLogicalParent?parent:callee).range
            const end = remove?.[0]?.range[1]
            const propertyRange = [from, end]
            return fixer.removeRange(propertyRange)
          }
        })
      }
    }
  }
}
