import styled from 'styled-components';

export const Container = styled.header`
  /* background-color: #1A1A1D;
  border: 1px solid rgba(0,0,0,0.2); */

  padding: 15px 0 0 30px;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 30px;
      color: #f0f0f5;

      svg {
        margin-left: 5px;
      }
    }
    p:not(.writer) {
      color: #f0f0f5;
      font-size: 18pt;
    }

    .writer {
      margin-top: 2px;
      font-size: 15px; 

      a {
        text-decoration: none;
        color: #04d261;

        transition: 250ms;
        :hover { 
          color: #1144ff;
        }
      }
    }
  }
`;
