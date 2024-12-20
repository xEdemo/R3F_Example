import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";

extend(geometry);

const Graces = () => {
	return (
		<>
			<Canvas
				className="graces-canvas"
				shadows="basic"
				eventSource={document.getElementById("root")}
				eventPrefix="client"
				camera={{ position: [0, 1.5, 14], fov: 30 }}
			>
				<fog attach="fog" args={["black", 0, 20]} />
				<pointLight position={[10, -10, -20]} intensity={10} />
				<pointLight position={[-10, -10, -20]} intensity={10} />
				<Model position={[0, -5.2, 3]} rotation={[0, -0.2, 0]} />
				<SoftShadows samples={3} />
				{/* <CameraControls
					minPolarAngle={0}
					maxPolarAngle={Math.PI / 2}
					minAzimuthAngle={-Math.PI / 3}
					maxAzimuthAngle={Math.PI / 3}
					minDistance={15}
					maxDistance={15}
				/> */}
			</Canvas>
		</>
	);
};

const Model = (props) => {
	const group = useRef();
	const light = useRef();
	const { nodes } = useGLTF("/graces-draco.glb");
	useFrame((state, delta) => {
		easing.dampE(
			group.current.rotation,
			[0, -state.pointer.x * (Math.PI / 10), 0],
			1.5,
			delta
		);
		easing.damp3(
			group.current.position,
			[0, -5.5, 1 - Math.abs(state.pointer.x)],
			1,
			delta
		);
		easing.damp3(
			light.current.position,
			[state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
			0.2,
			delta
		);
	});
	return (
		<group ref={group} {...props}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Node_3.geometry}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.2}
				dispose={null}
			>
				<meshLambertMaterial color="#404044" />
			</mesh>
			{/* <Annotation position={[1.75, 3, 2.5]}>
				Thalia <span style={{ fontSize: "1.5em" }}>🌗</span>
			</Annotation>
			<Annotation position={[-4.5, 3.6, -3]}>
				Euphrosyne <span style={{ fontSize: "1.5em" }}>🌖</span>
			</Annotation>
			<Annotation position={[1.5, 8, -3]}>
				<span style={{ fontSize: "1.5em" }}>🌕</span> Aglaia
			</Annotation> */}
			<spotLight
				angle={0.5}
				penumbra={0.5}
				ref={light}
				castShadow
				intensity={1000}
				shadow-mapSize={1024}
				shadow-bias={-0.001}
			>
				<orthographicCamera
					attach="shadow-camera"
					args={[-10, 10, -10, 10, 0.1, 50]}
				/>
			</spotLight>
		</group>
	);
};

const Annotation = ({ children, ...props }) => {
	return (
		<Html
			{...props}
			transform
			occlude="blending"
			geometry={<roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />}
		>
			<div className="annotation" onClick={() => console.log(".")}>
				{children}
			</div>
		</Html>
	);
}

export default Graces;
