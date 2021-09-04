//https://www.redblobgames.com/grids/hexagons/

import { useStyles, innerRadius, outerRadius } from './styles'
const r = 4
const w = r
const mode = 'mode2'
const width = 100

class Block {
  id: string
  x: number
  y: number
  z: number
  left: number
  top: number
  type: string
  color: string
  dis: number
  constructor(x: number, y: number, z: number) {
    this.id = '' + x + y + '' + z
    this.x = x
    this.y = y
    this.z = z
    this.dis = (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2

    let left = 0
    let top = 0

    left += x * (outerRadius * 1.5)
    top += y * innerRadius * 2
    top += x * innerRadius

    this.left = left
    this.top = top

    this.type = 'aaaa'
    this.color =
      'rgba(' +
      (Math.abs(x) / w) * 255 +
      ',' +
      (Math.abs(y) / w) * 255 +
      ',' +
      (Math.abs(z) / w) * 255 +
      ',1)'
  }
}

function generateBlocks(num: number): Block[] {
  const blocks: Block[] = []

  for (let x = -w; x <= w; x++) {
    for (let y = -w; y <= w; y++) {
      if (y <= Math.min(w, -x + w) && y >= Math.max(-w, -x - w)) {
        const z = -x - y
        blocks.push(new Block(x, y, z))
      }
    }
  }
  return blocks
}

const l = 2 * (r + 1) * width

export default function Home() {
  const blocks: Block[] = generateBlocks(10)

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
                        <text>{i.dis}</text>
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
