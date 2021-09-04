import { makeStyles, createStyles } from '@material-ui/core/styles'

export const outerRadius = 100
export const innerRadius = Math.cos((30 * Math.PI) / 180) * outerRadius

const width = innerRadius * 2
const height = (width * 280) / 255

export const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      position: 'relative',
    },

    block: {
      // width: width + 1,
      // height: height + 1,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: height + 'px',

      // 角在上的正六边形 280/255
      '-webkit-clip-path': 'polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)',
      'clip-path': 'polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)',

      // 边在上的正六边形 174/200
      // '-webkit-clip-path': 'polygon(25% 0%, 75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
      // 'clip-path': 'polygon(25% 0%, 75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
      '&:hover': {
        background: 'red !important ',
      },
    },
  })
)
