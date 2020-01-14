import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import ChildFuncCom from "./ChildFuncCom";

function ReactHook () {
  console.info('reactHook')
  const [{ count }, setState] = useState({ count: 0 })
  const [name, setName] = useState('Child组件')
  useEffect(() => {
    console.log('componentDidMount...')
    console.log('componentDidUpdate...')
    return () => {
      console.log('componentWillUnmount...')
    }
  });
  const childClick = useCallback((newName) => {
    setName(newName)
  }, [])
  return (
    <div>
      <button onClick={() => setState({ count: count + 1 })}>+</button>
      <span>{count}</span>
      <button onClick={() => setState({ count: count - 1 })}>-</button>
      {/*<ChildFuncCom name={name} onClick={useCallback((newName) => setName(newName), [])}/>*/}
      {/*<ChildFuncCom name={{ name, color: name.indexOf('name') !== -1 ? 'red' : 'green'}} onClick={childClick}/>*/}
      <ChildFuncCom
        name={
          useMemo(() => ({
            name,
            color: name.indexOf('name') !== -1 ? 'red' : 'green'
          }), [name])
        }
        onClick={childClick}/>
      {/*<ChildFuncCom name={name} onClick={(newName) => setName(newName)}/>*/}
    </div>
  )
}

export default memo(ReactHook)
