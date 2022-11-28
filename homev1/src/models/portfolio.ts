import * as THREE from "three"

// TODO add limit
export interface Portfolio {
    id: number;
    imgUri: string;
    title: string;
    desc: string;
    pos: THREE.Vector3;
}

export const GetPortfolioMock = (_id: number): Portfolio => {
    return {
        id: _id,
        imgUri: "https://placeimg.com/640/480/any",
        title: "Sample Portfolio",
        desc: "This is 3D portfolio created by @ocean_t_shirt",
        pos: new THREE.Vector3(0, 0, 0)
    }
}