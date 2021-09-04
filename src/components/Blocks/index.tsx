//https://www.redblobgames.com/grids/hexagons/

import { useStyles, innerRadius, outerRadius } from './styles'
const r = 5
const w = r
const h = r
const mode = 'mode1'
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
  constructor(x: number, y: number, z: number) {
    this.id = '' + x + y + '' + z
    this.x = x
    this.y = y
    this.z = z
    // this.left = x * innerRadius * 2 + (y % 2) * 0.5 * innerRadius * 2 + 500
    // this.top = y * 1.5 * outerRadius + 500

    // let left = 0
    // left += x * innerRadius * 2
    // left += y * innerRadius

    // let top = 0
    // top += y * (outerRadius + innerRadius * 0.5)

    // this.left = left
    // this.top = top
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

// function sumN(n: number): number {
//   return (n * (n + 1)) / 2
// }

// function getCList(c: number) : Block[]{
//   if(c ===)
//   const blocks: Block[] = []
//   return blocks
// }

function generateBlocks(num: number): Block[] {
  const blocks: Block[] = []

  for (let i = -w; i <= w; i++) {
    for (let j = -h; j <= h; j++) {
      for (let k = -h; k <= h; k++) {
        if (k === -i - j) {
          blocks.push(new Block(i, j, k))
        }
      }
    }
  }
  return blocks
}

const l = 2 * (r + 1) * width

export default function Home() {
  const blocks: Block[] = generateBlocks(10)
  // console.log('blocks')
  // console.log(blocks)
  // const classes = useStyles()

  return (
    <>
      <figure>
        <svg viewBox={`-${l} -${l} ${2 * l} ${2 * l}`}>
          <g
            // transform='rotate(-30)'
            transform={mode === 'mode2' ? 'rotate(-30)' : undefined}
            fill='#ffffff'
            stroke='#333333'
            // style={{
            //   transformOrigin: '0px 0px',
            // }}
          >
            <g
              className='grid'
              style={{
                transformOrigin: '0px 0px',
              }}
            >
              {blocks.map(i => {
                return (
                  <g
                    key={i.id}
                    transform={`translate(${i.left}, ${i.top}) `}
                    // style={{
                    //   transformOrigin: '0px 0px',
                    // }}
                  >
                    <g>
                      <polygon
                        // style={{
                        //   transformOrigin: '0px 0px',
                        // }}
                        points='100,0 50,-87 -50,-87 -100,-0 -50,87 50,87'
                        // points='100,0 50,-87 -50,-87 -100,-0 -50,87 50,87'
                        // pointerEvents={'visiblePainted'}
                        // fill='hsl(60, 10%, 95%)'
                        // stroke='hsl(0, 0%, 70%)'
                        // stroke-width='2px'
                        // style={{
                        //   transformOrigin: '0px 0px',
                        // }}
                      />
                      {/* <g>
                        <text>{i.x + ':' + i.y}</text>
                      </g> */}
                    </g>
                  </g>
                )
              })}
            </g>
          </g>
        </svg>
      </figure>
      {/* <div className={classes.root}>
        {blocks.map(i => {
          const z = -(i.x + i.y)
          const d = (Math.abs(i.x) + Math.abs(i.y) + Math.abs(z)) / 2
          return (
            <div
              key={i.id}
              className={classes.block}
              style={{
                left: i.left + 'px',
                top: i.top + 'px',
                backgroundColor: i.color,
              }}
            >
              {d}
            </div>
          )
        })}
      </div> */}
    </>
  )
}
