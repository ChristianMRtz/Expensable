import styled from "@emotion/styled";

export const ButtonBlue = styled.button`
  border: 1px solid #2f80ed;
  background: var(--blue-1);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Roboto";
  line-height: 24px;
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;
  &:hover {
    background: var(--blue-2);
  }
  &:active {
    transform: scale(1.1);
  }
  animation: move3 1.25s ease-in-out;
  @keyframes move3 {
    0% {
      transform: translateY(1000px);
    }
    50% {
      transform: rotate(4deg);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const ButtonTransparent = styled.button`
  border: 1px solid #2f80ed;
  background: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Roboto";
  color: var(--blue-1);
  line-height: 24px;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(47, 128, 237, 0.1);
    border: 1px solid var(--blue-2);
    color: var(--blue-2);
    transform: scale(1.1);
  }
`;

export const Space = styled.div`
  height: 115px;
`;

export const CenterButton = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: white;
  height: 100px;
  padding-top: 32px;
`;

export const LoginStyle = styled.div`
  text-align: center;
  font-family: "Roboto";
  color: var(--gray-2);
  h1 {
    width: 260px;
    font-size: 30px;
    line-height: 40px;
    font-style: normal;
    font-weight: normal;
    font-family: "Inter", sans-serif;
    margin: 32px 0;
    animation: move 1.25s ease-in-out;
    @keyframes move {
      0% {
        transform: translateX(-1000px);
      }
      50% {
        transform: rotate(-4deg);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
  .informativeText {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
    animation: move2 1.25s ease-in-out;
    @keyframes move2 {
      0% {
        transform: translateX(1000px);
      }
      50% {
        transform: rotate(4deg);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
  .textForm {
    font-size: 14px;
    line-height: 24px;
    margin-top: 4px;
    text-align: left;
  }
  input {
    color: var(--gray-2);
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid var(--blue-1);
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    width: 260px;
    height: 40px;
    padding: 8px 16px;
    &:focus {
      border: 1px solid var(--blue-2);
    }
    &::placeholder {
      color: var(--gray-3);
    }
  }
`;

export const ExpansableStyle = styled.div`
  text-align: center;
  font-family: "Roboto";
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    color: var(--gray-2);
    padding: 32px 0;
  }
  .NavLink {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .Links {
    border-bottom: 2px solid var(--gray-3);
    padding-bottom: 6px;
    cursor: pointer;
    font-family: "Inter";
    color: var(--gray-3);
    line-height: 24px;
    font-size: 18px;
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--blue-2);
      border-bottom: 2px solid var(--blue-2);
      transform: scale(1.025);
    }
  }
  .Links + .Links {
    margin-left: 10px;
  }
  .Selected {
    color: var(--gray-2);
    border-bottom: 2px solid var(--blue-1);
  }
  .Content {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 16px;
  }
  .Card {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: 16px 16px 24px;
    color: var(--gray-2);
    min-width: 150px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .TitleCard {
    font-size: 18px;
    line-height: 24px;
  }
  .NumberTransactions {
    font-size: 14px;
    line-height: 24px;
  }
  .TotalMoney {
    font-size: 20px;
    line-height: 32px;
    margin: 20px 0;
  }
  .ButtonTrash {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border: 1px solid var(--blue-1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      background: rgba(47, 128, 237, 0.1);
      border: 1px solid var(--blue-2);
      img {
        filter: invert(46%) sepia(41%) saturate(829%) hue-rotate(158deg)
          brightness(109%) contrast(91%);
      }
    }
  }
  img {
    height: 20px;
    width: 20px;
  }
`;
export const Loader = styled.div`
  margin-top: 100px;
  img{
    width: 150px;
    height: 150px;
  }
`;
