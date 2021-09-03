import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useStyles } from "./styles";
import Keyboard from './keyboard'

function Z65() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
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
        {/* </Stage> */}

        <Suspense fallback={null}>
          <Keyboard scale={0.02} />
        </Suspense>

        <OrbitControls
          // autoRotate
          enableZoom
          enablePan
        // minPolarAngle={Math.PI / 2.8}
        // maxPolarAngle={Math.PI / 2.8}
        />
      </Canvas>
    </div>
  );
}

export default Z65;
