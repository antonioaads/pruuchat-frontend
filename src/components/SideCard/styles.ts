import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-milk-white);
  border-radius: 15px;
  width: 25em;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    margin-top: 20px;
  }

  @media (max-width: 1041px)
  {
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    min-width: 235px;

  }
  @media(max-width: 768px){

    border: 2px solid var(--color-main-pruurple);
  }
  @media(max-width: 680px){
    position: absolute;
    left: calc(-90vw - 1px);
    top: 0;
    bottom: 0;
    width: 90vw;
    // background-color: white;
    // border: 1px solid silver;
    box-shadow: 2px 2px 3px silver;
    transition: all 350ms ease-out;





  }
`;
