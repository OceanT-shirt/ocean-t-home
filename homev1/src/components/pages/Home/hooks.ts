import {UserMock} from "../../../models/user";

export const useHome = () => {
    const user = UserMock;
    return { user };
}