interface PortfolioProps {
    imageUri: string;
    desc: string;
    pos: [number, number, number]
}

export const PortfolioBoard = ({imageUri, desc, pos}: PortfolioProps) => {
    return(
        <mesh position={pos}>
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={"black"} reflectivity={0.5} />
        </mesh>
    )
}