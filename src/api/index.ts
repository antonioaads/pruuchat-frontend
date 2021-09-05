import axios from "axios";
import { IUser } from "../provider/UserProvider";

const API_URL = "http://localhost:4018";

const api = {
    getUsers: (token: string): Promise<Array<IUser>> => axios.get(`${API_URL}/users`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(r => r.data.docs as Array<IUser>)
};

export default api;