import * as THREE from "three"

const posArray: [number, number, number][] = [...Array(9)].map((_, i) => [0, 0, i])

export const PosAligner = (index: number, len: number): THREE.Vector3 => {
    if (index > 9 || len > 9) {
        console.error("too many indexes")
        return new THREE.Vector3()
    }
    return new THREE.Vector3(...posArray[index])
}
