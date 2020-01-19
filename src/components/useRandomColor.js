import { useState } from "react";

const useRandomColor = (colors, initColor) => {
  const colorLen = colors.length
  const [color, setColor] = useState(initColor)
  const changeColor = () => {
    const index = Math.floor(Math.random() * colorLen)
    const pickedColor = colors[index]
    setColor(pickedColor)
  }
  return [color, changeColor]
}
export default useRandomColor
