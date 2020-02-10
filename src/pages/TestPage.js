import React, { useState } from "react";
import { findMaxString } from "../util/arithmeticUtil";
import { unique } from "../util/arithmeticUtil";
import { reverseString } from "../util/arithmeticUtil";

export default function TestPage () {
  const str = 'asdfghjklaqwertyuiopiaia'
  const [maxObj, setMaxObj] = useState({ maxNum: 0, maxValue: null })
  const maxString = () => {
    const maxObj = findMaxString(str)
    setMaxObj(maxObj)
  }

  const [uniqStr, setUniqStr] = useState('')
  const uniqueFunc = () => {
    const uniqStr = unique([...str]).join('')
    setUniqStr(uniqStr)
  }
  const [reverseStr, setReverseStr] = useState('')
  const reverseStrFunc = () => {
    const reversestr = reverseString(str)
    setReverseStr(reversestr)
  }
  return (
    <div>
      <h1>{str}</h1>
      <h1>{`出现最多的字符：${maxObj.maxValue},次数${maxObj.maxNum}`}</h1>
      <button onClick={maxString}>测试字符串字母出现频率最高的</button>
      <h1>{`去重之后的字符：${uniqStr}`}</h1>
      <button onClick={uniqueFunc}>测试字符串去重</button>
      <h1>{`翻转之后字符：${reverseStr}`}</h1>
      <button onClick={reverseStrFunc}>测试字符串去重</button>
    </div>
  )
}
