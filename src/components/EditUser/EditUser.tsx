import { Container } from "./styles";
import Avatar from "../Avatar";
import Button from "../Button";
import Input from "../Input";
import Close from "../../assets/close.svg";
import { IUser } from "../../provider/UserProvider";
import React from "react";
import api from "../../api";

interface EditUserProps {
  user: IUser | null;
  closeCallback: (hasEditedUser: boolean, editedUser?: EditUserState) => void;
}

export interface EditUserState {
  name: string;
  email: string;
}

const EditUser = ({
  closeCallback,
  user,
}: EditUserProps): React.ReactElement => {
  const [values, setValues] = React.useState<EditUserState>({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange =
    (prop: keyof EditUserState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleEdit = async () => {
    await api
      .editUser(user?.token || "", user?.id || 0, values)
      .then(() => {
        closeCallback(true, values);
      })
      .catch((error) => {
        console.error(error);
        closeCallback(false);
      });
  };

  return (
    <Container>
      <img
        src={Close}
        alt="Close icon"
        className="close-icon"
        onClick={() => {
          closeCallback(false);
        }}
      />
      <Avatar
        fullName={user?.name || ""}
        profilePictureUrl={user?.picture || ""}
        size="x-large"
      />
      <p className="fullname">{user?.name || ""}</p>

      <div className="form-container">
        <Input
          label="Name"
          defaultValue={user?.name || ""}
          onChange={handleChange("name")}
        ></Input>
        <Input
          label="Email"
          defaultValue={user?.email || ""}
          onChange={handleChange("email")}
        ></Input>
      </div>

      <Button className="btn-save" color="secundary" onClick={handleEdit}>
        Salvar
      </Button>
    </Container>
  );
};

export default EditUser;
