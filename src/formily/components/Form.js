/**
 * 这里先简单的以一个form标签包裹子元素
 * 暂时先不考虑 from 上下文的问题
 * @param {*} props 
 * @returns 
 */
function Form(props) {
  return (
    <form>
      {props.children}
    </form>
  )
}

export {
  Form
}