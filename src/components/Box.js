import React, { useState } from "react"
import { useSpring, a } from "@react-spring/three"
import { render } from "react-dom"

window.addEventListener("click", () =>
  render(<div>HELLLOOOOOO</div>, document.querySelector("canvas"))
)

const Box = () => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray",
  })

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <sphereGeometry />
      <a.meshStandardMaterial
        metalness={0.9}
        roughness={0.6}
        attach="material"
        color={props.color}
      />
    </a.mesh>
  )
}

export default Box
