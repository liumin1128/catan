//https://www.redblobgames.com/grids/hexagons/

import { useStyles, innerRadius, outerRadius } from './styles'
const r = 5
const w = r
const h = r

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

    let left = 0
    left += x * innerRadius * 2
    left += y * innerRadius

    let top = 0
    top += y * (outerRadius + innerRadius * 0.5)

    this.left = left + 500
    this.top = top + 500

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

export default function Home() {
  const blocks: Block[] = generateBlocks(10)
  console.log('blocks')
  console.log(blocks)
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
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
              {/* {i.x + ':' + i.y + ':' + z + ':' + d} */}
              {d}
            </div>
          )
        })}
      </div>
    </>
  )
}
