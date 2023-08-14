export interface User {
    userKey: string; // to manage data
    userId: string; // to fix url
    userName: string;
}

// TODO edit user class and add id generator
export class User {
    constructor(userKey: string, userId: string, userName: string) {
        this.userKey = userKey;
        this.userId = userId;
        this.userName = userName;
    }
    getUserId() {
        return "@" + this.userId
    }
}

export const UserMock = new User(
    "a",
    "ocean_t_shirt",
    "Haruka Takahira"
)

