import React, { memo } from "react";

function ChildFuncCom (props) {
  console.info('子组件')
  return (
    <div>
      <div style={{ color: props.name.color }}>我是一个子组件,父级传过来的数据：{props.name.name}</div>
      <button onClick={props.onClick.bind(null, '新的子组件name')}>改变name</button>
    </div>

  )
}

export default memo(ChildFuncCom)
