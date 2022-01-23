import styled, { css } from "styled-components";

type LinkContainerProps = {
  hoverEffect?: "opacity";
};

export const LinkContainer = styled.a<LinkContainerProps>`
  color: unset;
  transition: 250ms;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.hoverEffect &&
    css`
      :hover {
        opacity: 0.7;
      }
    `};
`;
