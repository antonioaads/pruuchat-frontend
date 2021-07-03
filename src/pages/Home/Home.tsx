import React, { useState } from 'react';
import { HomeContainer } from './styles';
import Header from '../../core/Header';
import Chat from '../../core/Chat';
import { Message } from '../../components/MessageList/types';

const Home = (): React.ReactElement => {
  const [messageList, setMessageList] = useState(messages);
  
  const _onSendClick = (msg: string) => {
    setMessageList(messageList.concat({ content: msg, owner: true }));
  }

  const _handleImageFile = (file: File) => {
    // carregar para exibir imagem em um tag img
    // código apenas "placeholder" pra quando integrar com o back
    const reader = new FileReader();
    reader.onload = () => {
      setMessageList((previousState: Array<Message>): Array<Message> => {
        return previousState.concat({ content: reader.result || '', owner: true, image: true })
      });
    };
    reader.readAsDataURL(file);
  }

  return (
    <HomeContainer>
      <Header />
      <Chat messageList={messageList} onSendClick={_onSendClick} handleImageFile={_handleImageFile} />
    </HomeContainer>
  )
}

const messages: Array<Message> = [
  { content: 'eae', owner: false},
  { content: 'eae bro', owner: true},
  { content: 'como vai?', owner: false},
  { content: 'tudo bem e vc?', owner: true},
  { content: 'suave na nave', owner: false},
  { content: 'e o trabalho', owner: true},
  { content: 'fluindo de boas?', owner: true},
  { content: 'ta no papo mano', owner: false},
  { content: 'olha só', owner: false},
  { content: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis.', owner: false},
  { content: 'boa, to vendo 🙄', owner: true},
]

export default Home;
