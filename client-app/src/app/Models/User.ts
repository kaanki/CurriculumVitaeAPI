export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    status: number;
    role: number;
    createDate: Date;
    updateDate: Date;
}

