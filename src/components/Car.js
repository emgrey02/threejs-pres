import React from "react"
import { useFBX } from "@react-three/drei"

const Car = () => {
  const fbx = useFBX("/Jeep_done.fbx")

  return <primitive object={fbx} />
}

export default Car
