import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-milk-white);
  border-radius: 15px;
  padding: 1.5em;
  width: 25em;
  overflow-y: scroll;
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
    left: -236px;
    top: 0;
    bottom: 0;
    width: 235px;
    // background-color: white;
    // border: 1px solid silver;
    box-shadow: 2px 2px 3px silver;
    transition: all 200ms ease-out;


    


  }
`;
