import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;

  margin: 50px auto 0 auto;

  @media (max-width: 921px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div + div {
      margin-top: 30px;
    }
    div {
      width: 90%;
    }
  }

  @media (max-width: 1125px) {
    div {
      margin: 0 10px;
    }
  }
 
  @media (max-width: 360px) {
    .first {
      height: 280px;
    }
  }

  @media (max-width: 320px) {
    .first {
      height: 320px;
    }
  }

  div {
    box-sizing: border-box;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 250px;

    max-width: 450px;

    font-size: 18px;

    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 30px;

    background-color: #1A1A1D;

    transition: 250ms;
    :hover {
      border: 1px solid #04d261;
    }

    svg {
      margin-top: 15px; 
      position: absolute;
      bottom: 40px;
    }
  }
`;
