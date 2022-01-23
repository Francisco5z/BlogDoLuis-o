import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 30px;

  h1 {
    margin-right: 7px;
  }

  .blog-description {
    margin-top: 40px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 320px) {
    padding: 12px 15px;
  }
`;
