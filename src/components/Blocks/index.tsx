//https://www.redblobgames.com/grids/hexagons/

import { useStyles } from './styles'
const r = 1
const scale = 6
const w = r
const mode = 'mode1'
const width = 100
export const outerRadius = width
export const innerRadius = Math.cos((30 * Math.PI) / 180) * outerRadius

function cube2position(x: number, y: number): [left: number, top: number] {
  let left = 0
  let top = 0
  left += x * (outerRadius * 1.5) + innerRadius
  top += (y * 2 + x) * innerRadius
  return [left, top]
}

function position2cube(left: number, top: number): [x: number, y: number] {
  let x = 0
  let y = 0
  x = (left - innerRadius) / (1.5 * outerRadius)
  y = (top / innerRadius - x) / 2
  return [x, y]
}

function getJiaoList(x: number, y: number): { x: number; y: number }[] {
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

function getBianList(x: number, y: number): { x: number; y: number }[] {
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

class Point {
  id: string
  x: number
  y: number
  z: number
  left: number
  top: number
  dis: number
  constructor(x: number, y: number, z: number) {
    this.id = '' + x + y + '' + z
    this.x = x
    this.y = y
    this.z = z

    this.dis = (Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)) / 2

    const [left, top] = cube2position(this.x / scale, this.y / scale)

    this.left = left
    this.top = top
  }
}

class House extends Point {}
class Block extends Point {}
class Route extends Point {}

function generateBlocks(num: number): [Block[], House[], Route[]] {
  const blocks: Block[] = []
  const houses: House[] = []
  const routes: Route[] = []

  for (let x = -w; x <= w; x++) {
    for (let y = -w; y <= w; y++) {
      if (y <= Math.min(w, -x + w) && y >= Math.max(-w, -x - w)) {
        const _x = x * scale
        const _y = y * scale
        const _z = -_x - _y
        blocks.push(new Block(_x, _y, _z))

        getJiaoList(_x, _y).map(i => {
          if (houses.findIndex(j => j.x === i.x && j.y === i.y) === -1) {
            houses.push(new House(i.x, i.y, -i.x - i.y))
          }
        })

        getBianList(_x, _y).map(i => {
          if (routes.findIndex(j => j.x === i.x && j.y === i.y) === -1) {
            routes.push(new House(i.x, i.y, -i.x - i.y))
          }
        })
      }
    }
  }
  return [blocks, houses, routes]
}

const l = 2 * (r + 1) * width

export default function Home() {
  const [blocks, houses, routes] = generateBlocks(10)

  return (
    <>
      <figure>
        <svg viewBox={`-${l} -${l} ${2 * l} ${2 * l}`}>
          <g
            transform={mode === 'mode2' ? 'rotate(-30)' : undefined}
            fill='#ffffff'
            stroke='#333333'
          >
            <g
              className='grid'
              style={{
                transformOrigin: '0px 0px',
              }}
            >
              {blocks.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      <polygon points='100,0 50,-87 -50,-87 -100,-0 -50,87 50,87' />
                      <g transform={mode === 'mode2' ? 'rotate(30)' : undefined}>
                        <text>
                          {/* {i.x + '/' + i.y + ':' + i.left.toFixed(0) + ',' + i.top.toFixed(0)} */}
                          {i.x + ',' + i.y}
                        </text>
                      </g>
                    </g>
                  </g>
                )
              })}
              {houses.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      {/* <circle cx='100' cy='50' r='40' stroke='black' stroke-width='2' fill='red' /> */}
                      <g transform={mode === 'mode2' ? 'rotate(30)' : undefined}>
                        <text>{i.x + ',' + i.y}</text>
                      </g>
                    </g>
                  </g>
                )
              })}

              {routes.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      {/* <circle cx='100' cy='50' r='40' stroke='black' stroke-width='2' fill='red' /> */}
                      <g transform={mode === 'mode2' ? 'rotate(30)' : undefined}>
                        <text>{i.x + ',' + i.y}</text>
                      </g>
                    </g>
                  </g>
                )
              })}
            </g>
          </g>
        </svg>
      </figure>
    </>
  )
}
