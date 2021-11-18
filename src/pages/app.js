import React, { Suspense } from "react"
import Layout from "../components/Layout"
import Scene from "../components/Scene"
import Box from "../components/Box"
import Car from "../components/Car"
import Plane from "../components/Plane"

import * as THREE from "three"
import { OrbitControls, Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const App = () => {
  return (
    <Layout>
      <Loader />
      <Canvas
        camera={{ position: [0, 5, 18] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <OrbitControls autoRotate />
        <Scene />
        <Box />
        {/* <Plane />
        <Suspense fallback={null}>
          <Car />
        </Suspense> */}
      </Canvas>
    </Layout>
  )
}

export default App
