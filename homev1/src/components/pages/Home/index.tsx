import {Home} from "../../templetes/Home";
import {useHome} from "./hooks";

export const HomePage = () => {
    const { hoge } = useHome()
    console.log(hoge)
    return (
        <>
            <Home />
        </>
    )
}