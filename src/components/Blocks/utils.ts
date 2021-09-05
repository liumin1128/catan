import { outerRadius, innerRadius } from './index'

export function cube2position(x: number, y: number): [left: number, top: number] {
  let left = 0
  let top = 0
  left += x * (outerRadius * 1.5) + innerRadius
  top += (y * 2 + x) * innerRadius
  return [left, top]
}

export function position2cube(left: number, top: number): [x: number, y: number] {
  let x = 0
  let y = 0
  x = (left - innerRadius) / (1.5 * outerRadius)
  y = (top / innerRadius - x) / 2
  return [x, y]
}

export function getJiaoList(x: number, y: number): { x: number; y: number }[] {
  const list = [
    [+2, +2],
    [+2, -4],
    [-4, +2],
    [-2, -2],
    [-2, +4],
    [+4, -2],
  ]

  return list.map(i => {
    return { x: x + i[0], y: y + i[1] }
  })
}

export function getBianList(x: number, y: number): { x: number; y: number }[] {
  const list = [
    [0, -3],
    [-3, 0],
    [-3, 3],
    [0, 3],
    [3, 0],
    [3, -3],
  ]

  return list.map(i => {
    return { x: x + i[0], y: y + i[1] }
  })
}
