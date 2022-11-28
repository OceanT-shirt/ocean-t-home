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
        imgUri: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Sample Portfolio",
        desc: "This is 3D portfolio created by @ocean_t_shirt",
        pos: new THREE.Vector3(_id, 0, -5*_id)
    }
}