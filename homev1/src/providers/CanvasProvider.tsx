import React, { createContext, ReactNode, useState } from 'react';
import {RouteType} from "../constants/Route";


type CanvasContextType = {
    route: RouteType;
    setRoute: (route: RouteType) => void;
};


export const CanvasContext = createContext<CanvasContextType>({
    route: "HOME",
    setRoute: (route: RouteType) => {console.log(route)},
});


interface Props {
    children: ReactNode
}


export const CanvasProvider = ( {children} : Props) => {
    const [route, setRoute] = useState<RouteType>("HOME")

    const newContext: CanvasContextType = {
        route: route,
        setRoute: (_route: RouteType) => {
            setRoute(_route)
            console.log(_route)
        },
    };

    return (
        <CanvasContext.Provider value={newContext}>{children}</CanvasContext.Provider>
    );
};
