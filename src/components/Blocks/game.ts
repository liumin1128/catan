import { getJiaoList, getBianList } from './utils'

class Point {
  scale: number
  id: string
  x: number
  y: number
  z: number
  left: number
  top: number
  dis: number
  innerRadius: number
  outerRadius: number
  constructor(
    x: number,
    y: number,
    z: number,
    scale: number,
    innerRadius: number,
    outerRadius: number
  ) {
    this.id = '' + x + y + '' + z
    this.x = x
    this.y = y
    this.z = z
    this.scale = scale
    this.innerRadius = innerRadius
    this.outerRadius = outerRadius

    this.dis = (Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)) / 2

    const [left, top] = this.cube2position(this.x / scale, this.y / scale)

    this.left = left
    this.top = top
  }

  cube2position(x: number, y: number): [left: number, top: number] {
    let left = 0
    let top = 0
    left += x * (this.outerRadius * 1.5) + this.innerRadius
    top += (y * 2 + x) * this.innerRadius
    return [left, top]
  }
}

export class House extends Point {}
export class Block extends Point {}
export class Route extends Point {}

export class Game {
  rotate: number = 30
  scale: number = 6
  r: number = 3
  sideLength: number = 100
  width: number = 2 * (this.r + 1) * this.sideLength
  height: number = 2 * (this.r + 1) * this.sideLength
  outerRadius = this.sideLength
  innerRadius = Math.cos((30 * Math.PI) / 180) * this.outerRadius

  blocks: Block[] = []
  houses: House[] = []
  routes: Route[] = []

  onChange: (obj: Game) => void

  constructor({ onChange }: { onChange: (obj: Game) => void }) {
    this.onChange = onChange
    this.init()
  }

  init = () => {
    const blocks: Block[] = []
    const houses: House[] = []
    const routes: Route[] = []

    for (let x = -this.r; x <= this.r; x++) {
      for (let y = -this.r; y <= this.r; y++) {
        if (y <= Math.min(this.r, -x + this.r) && y >= Math.max(-this.r, -x - this.r)) {
          const _x = x * this.scale
          const _y = y * this.scale
          const _z = -_x - _y
          blocks.push(new Block(_x, _y, _z, this.scale, this.innerRadius, this.outerRadius))

          getJiaoList(_x, _y).map(i => {
            if (houses.findIndex(j => j.x === i.x && j.y === i.y) === -1) {
              houses.push(
                new House(i.x, i.y, -i.x - i.y, this.scale, this.innerRadius, this.outerRadius)
              )
            }
          })

          getBianList(_x, _y).map(i => {
            if (routes.findIndex(j => j.x === i.x && j.y === i.y) === -1) {
              routes.push(
                new House(i.x, i.y, -i.x - i.y, this.scale, this.innerRadius, this.outerRadius)
              )
            }
          })
        }
      }
    }

    this.blocks = blocks
    this.houses = houses
    this.routes = routes

    this.onChange(this)
  }
}
