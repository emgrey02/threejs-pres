import React, { Suspense, useRef, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Scene from "../components/Scene"

import * as THREE from "three"
import { OrbitControls, Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Home = () => {
  return (
    <Layout>
      <div className="greeting">
        <h1>Intonation</h1>
        <h2>Welcome</h2>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sagittis
            aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
            Egestas integer eget aliquet nibh praesent tristique magna sit amet.
            Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Sed
            euismod nisi porta lorem mollis aliquam. In pellentesque massa
            placerat duis ultricies lacus sed turpis. Diam quam nulla porttitor
            massa id neque. Bibendum enim facilisis gravida neque convallis a
            cras semper. Ornare lectus sit amet est. Vitae suscipit tellus
            mauris a diam. Convallis convallis tellus id interdum velit laoreet.
            Eget nulla facilisi etiam dignissim diam quis enim lobortis. Nam
            libero justo laoreet sit amet cursus sit amet dictum. Quis enim
            lobortis scelerisque fermentum dui faucibus in ornare quam. Eros
            donec ac odio tempor orci. Felis bibendum ut tristique et egestas.
            Nec tincidunt praesent semper feugiat nibh sed. Tortor aliquam nulla
            facilisi cras.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sagittis
            aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
            Egestas integer eget aliquet nibh praesent tristique magna sit amet.
            Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Sed
            euismod nisi porta lorem mollis aliquam. In pellentesque massa
            placerat duis ultricies lacus sed turpis. Diam quam nulla porttitor
            massa id neque. Bibendum enim facilisis gravida neque convallis a
            cras semper. Ornare lectus sit amet est. Vitae suscipit tellus
            mauris a diam. Convallis convallis tellus id interdum velit laoreet.
            Eget nulla facilisi etiam dignissim diam quis enim lobortis. Nam
            libero justo laoreet sit amet cursus sit amet dictum. Quis enim
            lobortis scelerisque fermentum dui faucibus in ornare quam. Eros
            donec ac odio tempor orci. Felis bibendum ut tristique et egestas.
            Nec tincidunt praesent semper feugiat nibh sed. Tortor aliquam nulla
            facilisi cras.
          </p>
        </div>
        <Link to="/app">Enter Experience</Link>
      </div>
      <Canvas
        camera={{ position: [0, 5, 18] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <OrbitControls autoRotate />
        <Scene />
      </Canvas>
      <Loader />
    </Layout>
  )
}

export default Home
