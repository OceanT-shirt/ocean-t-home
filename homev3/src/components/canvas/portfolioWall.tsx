export const PortfolioWall = ({ color, position }: {color: string, position: [number, number, number]}) => (
    <mesh
        position={position}
    >
        <boxGeometry args={[2, 20, 2]} />
        <meshLambertMaterial color={color} reflectivity={0.5} />
    </mesh>
)