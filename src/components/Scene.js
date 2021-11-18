import React from "react"
import * as THREE from "three"
import { Sky, Stars } from "@react-three/drei"

const Scene = () => {
  return (
    <>
      <Stars radius={400} count={3000} />
      <Sky distance={4000} turbidity={2} rayleigh={5} inclination={0.5001} />
      <ambientLight args={[0xffffff, 1]} />
      <spotLight
        intensity={1}
        position={[0, 0, -20]}
        penumbra={1}
        color="orange"
        castShadow
      />
    </>
  )
}

export default Scene
