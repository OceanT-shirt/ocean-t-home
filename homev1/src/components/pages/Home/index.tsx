import {Home} from "../../templetes/Home";
import {useHome} from "./hooks";

export const HomePage = () => {
    const { user } = useHome()
    return (
        <>
            <Home user={user} />
        </>
    )
}