import axios from "axios";
import { EditUserState } from "../components/EditUser/EditUser";
import { IUser } from "../provider/UserProvider";

const API_URL = process.env.REACT_APP_BASE_PATH;

const api = {
  getFriends: (token: string): Promise<Array<IUser>> =>
    axios
      .get(`${API_URL}/friends`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => r.data.docs as Array<IUser>),
  editUser: (
    token: string,
    userId: number,
    editedUser: EditUserState
  ): Promise<void> =>
    axios.put(
      `${API_URL}/users`,
      { ...editedUser, id: userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
};

export default api;
