export const Plane = ({ color, position }: {color: string, position: [number, number, number]}) => (
    <mesh
        position={position}
    >
        <boxGeometry args={[12, .2, 2]} />
        <meshLambertMaterial color={color} reflectivity={0.5} />
    </mesh>
)