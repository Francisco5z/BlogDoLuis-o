import type { NextPage } from "next";
import Head from "next/head";

import { Container, Header } from "../styles/Home";
import { FaGithub } from "react-icons/fa";
import Link from "../components/Link";

const HomePage: NextPage = () => {
  return (
    <Container>
      <Head>
        <title> Blog do Luisão! </title>
      </Head>

      <Header>
        <Link href="/">
          <h1>Blog do Luisão</h1>
        </Link>

        <Link
          hover="opacity"
          isExternal
          href="https://github.com/Francisco5z/BlogDoLuisao"
        >
          <FaGithub size={32} />
        </Link>
      </Header>

      {/* <Header>
        <div className="blog-title">
          <h1>Blog do Luisão</h1>
          <FaBloggerB size={48} />
        </div>

        <div className="blog-description">
          <p> Pessoas com diabetes no turismo... </p>
          <p className="writer">
            Escrito por
            <a target="_blank" href="https://www.instagram.com/arthurrluiiz/">
              Arthur Luiz
            </a>
          </p>
        </div>
      </Header> */}
    </Container>
  );
};

export default HomePage;
