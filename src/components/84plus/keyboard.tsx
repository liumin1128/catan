import React, { useContext } from 'react'
import { useGLTF } from '@react-three/drei'
import KeyboardContext from '@/context/keyboard/context'
import get from 'lodash/get'

const filepath = '/84.glb'

useGLTF.preload(filepath)

const list = [
  'Part__Feature',
  'Part__Feature001',
  'Part__Feature002',
  'Part__Feature003',
  'Part__Feature004',
  'Part__Feature005',
  'Part__Feature006',
]

function Box(props: JSX.IntrinsicElements['group']) {
  const glb: any = useGLTF(filepath)
  const { nodes } = glb

  const context = useContext(KeyboardContext);

  console.log("context")
  console.log(context)

  return (
    <group {...props} >
      {list.map(i => {
        return <mesh
          key={i}
          castShadow
          receiveShadow
          geometry={nodes[i].geometry}
          material={nodes[i].material}
          // @ts-ignore
          {...get(props.data, i, {})}
        //   material-envMapIntensity={0.9}
        //   // 材质与金属的相似度。非金属材质，如木材或石材，使用0.0，金属使用1.0，通常没有中间值。 默认值为0.5。0.0到1.0之间的值可用于生锈金属的外观。如果还提供了metalnessMap，则两个值相乘。
        //   material-metalness={0.3}
        //   // 材质的粗糙程度。0.0表示平滑的镜面反射，1.0表示完全漫反射。默认值为0.5。如果还提供roughnessMap，则两个值相乘。
        //   material-roughness={0.9}
        // // material-shininess={1}
        // // material-color={'#333'}
        />
      })}
    </group>
  )
}

export default Box
