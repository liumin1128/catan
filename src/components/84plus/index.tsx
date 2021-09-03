import React, { Suspense, useState, useRef } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { useStyles } from "./styles";
import KeyboardProvider from '@/context/keyboard/Provider'
import Keyboard from './keyboard'
import Drawer from '../Drawer'
import From from '../From'

function Z65() {
  const classes = useStyles();

  const [data, setData] = useState()

  const ref = useRef()

  // const { values, submitForm } = useFormikContext();
  return (
    <KeyboardProvider>

      <div className={classes.root} onClick={() => {

        // @ts-ignore
        ref.current?.open()
      }}>
        <Canvas>
          {/* 环境光 */}
          {/* <ambientLight intensity={0.5} /> */}

          {/* 平行光 */}
          {/* <directionalLight intensity={0.9} /> */}

          {/* 点光源 */}
          <pointLight position={[-3, 5, 5]} intensity={1} />

          {/* 聚光灯 */}
          {/* <spotLight position={[0, 10, 0]} /> */}

          {/* 半球光 */}
          {/* <hemisphereLight /> */}

          {/* 平面光 */}
          {/* <rectAreaLight position={[-1, 1, 0]} /> */}

          {/* <Stage> will center and light the contents, create ground-shadows, and zoom the camera */}


          {/* <Environment path="/cube" /> */}
          {/* <Stage intensity={1} contactShadowOpacity={1} shadowBias={-0.0015}> */}

          <Suspense fallback={null}>
            <Center>
              <Keyboard
                // @ts-ignore
                data={data}
                scale={0.02}
              />
            </Center>
          </Suspense>

          {/* </Stage> */}

          <OrbitControls
            // autoRotate
            enableZoom
            enablePan
          // minPolarAngle={Math.PI / 2.8}
          // maxPolarAngle={Math.PI / 2.8}
          />
        </Canvas>

        <Drawer ref={ref}>
          <From data={data} setData={setData} />
        </Drawer>

        {/* <Button className={classes.button} onClick={() => {
          ref.current.open()
        }}>open</Button> */}

        {/* <pre>{JSON.stringify(values)}</pre> */}
      </div>
    </KeyboardProvider>

  );
}

export default Z65;
