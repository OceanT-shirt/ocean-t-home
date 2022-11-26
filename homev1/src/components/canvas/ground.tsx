export const Ground = ({pos}: {pos: [number, number, number]}) => {
    return(
        <mesh position={pos}>
            <boxGeometry args={[40, .1, 40]} />
            <meshLambertMaterial color={"black"} reflectivity={0.5} />
        </mesh>
    )
}