import axios from "axios";
import { IUser } from "../provider/UserProvider";

const API_URL = "http://localhost:4018";

const api = {
    getFriends: (token: string): Promise<Array<IUser>> => axios.get(`${API_URL}/friends`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(r => r.data.docs as Array<IUser>)
};

export default api;