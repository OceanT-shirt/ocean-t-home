import * as THREE from "three"

// TODO add limit
export interface Portfolio {
    id: number;
    imgUri: string;
    title: string;
    desc: string;
    pos: THREE.Vector3;
    rotation?: THREE.Euler;  // Rad
}

export const GetPortfolioMock = (_id: number): Portfolio => {
    const START_ANGLE = Math.PI/16
    const SPACE_ANGLE = Math.PI/16
    const centerAngle = (_id-1)*SPACE_ANGLE+START_ANGLE
    const radius = 100
    const x = radius*Math.sin(centerAngle)
    const z = radius*(1-Math.cos(centerAngle))
    return {
        id: _id,
        imgUri: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Sample Portfolio",
        desc: "This is 3D portfolio created by @ocean_t_shirt",
        pos: new THREE.Vector3(-x, 0, z),
        rotation: new THREE.Euler(0, START_ANGLE, 0)
    }
}