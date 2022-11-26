export const WindowFrame = ({ color, position }: {color: string, position: [number, number, number]}) => {
    return(
            <mesh
                position={position}
            >
                <boxGeometry args={[40, 12, 1]} />
                <meshLambertMaterial color={color} reflectivity={0.5} />
            </mesh>
    )
}