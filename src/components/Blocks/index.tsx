//https://www.redblobgames.com/grids/hexagons/

import { useStyles } from './styles'
const r = 4
const scale = 6
const w = r
const mode = 'mode1'
const width = 100
import { cube2position, position2cube, getJiaoList, getBianList } from './utils'

export const outerRadius = width
export const innerRadius = Math.cos((30 * Math.PI) / 180) * outerRadius
import { Game } from './game'
import { useEffect, useState } from 'react'

const l = 2 * (r + 1) * width

export default function Home() {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    new Game({ onChange: (g: Game) => { setGame(g) } })
  }, [])

  console.log("game")
  console.log(game)

  if (!game) return 'loading'

  return (
    <>
      <figure>
        <svg viewBox={`-${game.width} -${game.width} ${2 * game.width} ${2 * game.width}`}>
          <g
            transform={`rotate(-${game.rotate})`}
            fill='#ffffff'
            stroke='#333333'
          >
            <g
              className='grid'
              style={{
                transformOrigin: '0px 0px',
              }}
            >
              {game.blocks.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      <polygon points='100,0 50,-87 -50,-87 -100,-0 -50,87 50,87' />
                      <g

                        transform={`rotate(-${game.rotate})`

                        }

                      >
                        <text>
                          {i.x + ',' + i.y + ',' + i.dis}
                        </text>
                      </g>
                    </g>
                  </g>
                )
              })}

              {game.houses.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      <circle cx='0' cy='0' r='20' stroke='black' fill='red' />
                      <g
                        transform={`rotate(-${game.rotate})`}
                      >
                        <text>{i.x + ',' + i.y + ',' + i.dis}</text>
                      </g>
                    </g>
                  </g>
                )
              })}

              {game.routes.map(i => {
                return (
                  <g key={i.id} transform={`translate(${i.left}, ${i.top}) `}>
                    <g>
                      <g
                        transform={`rotate(-${game.rotate})`}

                      >
                        <text>{i.x + ',' + i.y + ',' + i.dis}</text>
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
