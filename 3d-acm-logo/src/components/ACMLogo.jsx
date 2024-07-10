"use client";

import * as THREE from 'three'
import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

// type GLTFResult = GLTF & {
//   nodes: {
//     Curve: THREE.Mesh
//     Curve001: THREE.Mesh
//     Curve002: THREE.Mesh
//     Curve003: THREE.Mesh
//     Curve004: THREE.Mesh
//     Curve005: THREE.Mesh
//     Curve006: THREE.Mesh
//     Curve007: THREE.Mesh
//   }
//   materials: {
//     Material: THREE.MeshStandardMaterial
//     ['Material.002']: THREE.MeshStandardMaterial
//     ['Material.001']: THREE.MeshStandardMaterial
//   }
// }

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/ACM-Logo.gltf')// as GLTFResult
  const instances = useMemo(
    () => ({
      Curve: nodes.Curve,
      Curve1: nodes.Curve001,
      Curve2: nodes.Curve002,
      Curve3: nodes.Curve003,
      Curve4: nodes.Curve004,
      Curve5: nodes.Curve005,
      Curve6: nodes.Curve006,
      Curve7: nodes.Curve007,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <instances.Curve
          name="Curve"
          position={[-0.068, 17.687, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve' }}
        />
        <instances.Curve1
          name="Curve001"
          position={[-0.113, 17.462, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.001' }}
        />
        <instances.Curve2
          name="Curve002"
          position={[-5.074, 17.07, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.002' }}
        />
        <instances.Curve3
          name="Curve003"
          position={[-1.157, 13.276, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.003' }}
        />
        <instances.Curve4
          name="Curve004"
          position={[0.692, 13.568, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.004' }}
        />
        <instances.Curve5
          name="Curve005"
          position={[3.558, 13.857, 2.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.005' }}
        />
        <instances.Curve6
          name="Curve006"
          position={[-0.071, 17.712, 2.289]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.006' }}
        />
        <instances.Curve7
          name="Curve007"
          position={[-0.068, 17.727, 2.367]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1000}
          userData={{ name: 'Curve.007' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/ACM-Logo.gltf')