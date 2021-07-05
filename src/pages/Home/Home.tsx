import React, { useState, Fragment } from "react";
import { Container } from "./styles";
import Header from "../../core/Header";
import Chat from "../../core/Chat";
import SideCard from "../../components/SideCard";

const Home = (): React.ReactElement => {
  const [messageList, setMessageList] = useState(messages);

  const _onSendClick = (msg: string) => {
    setMessageList(messageList.concat({ content: msg, owner: true }));
  };

  return (
    <Fragment>
      <Container>
        <Header
          fullname="Guilherme Giacomin"
          profilePictureUrl="https://avatars.githubusercontent.com/u/54778237?v=4"
        />

        <div className="page-content">
          <SideCard content={<span>hello</span>} />
          <Chat messageList={messageList} onSendClick={_onSendClick} />
        </div>
      </Container>
    </Fragment>
  );
};

const messages = [
  { content: "eae", owner: false },
  { content: "eae bro", owner: true },
  { content: "como vai?", owner: false },
  { content: "tudo bem e vc?", owner: true },
  { content: "suave na nave", owner: false },
  { content: "e o trabalho", owner: true },
  { content: "fluindo de boas?", owner: true },
  { content: "ta no papo mano", owner: false },
  { content: "olha só", owner: false },
  {
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis.",
    owner: false,
  },
  { content: "boa, to vendo 🙄", owner: true },
];

export default Home;
