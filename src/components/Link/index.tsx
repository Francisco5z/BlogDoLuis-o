import { LinkContainer } from "./styles";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;

  href: string;
  isExternal?: boolean;
  hover?: "opacity";
};

export default function Link({ children, href, isExternal, hover }: Props) {
  return (
    <NextLink href={href} passHref>
      <LinkContainer
        target={isExternal ? "_blank" : "_self"}
        hoverEffect={hover}
      >
        {children}
      </LinkContainer>
    </NextLink>
  );
}
