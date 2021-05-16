import React, { FunctionComponent } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import styled from "styled-components";
import { IconContainer } from "../../components/misc/icon-container";

import GithubIconSvg from "../../images/github.svg";
import LogoIconSvg from "../../images/chillicream.svg";
import LogoTextSvg from "../../images/chillicream-text.svg";
import SlackIconSvg from "../../images/slack.svg";
import TwitterIconSvg from "../../images/twitter.svg";
import Link from "@docusaurus/Link";

const Footer: FunctionComponent = () => {
  const { footer, navbar } = useThemeConfig();

  const { copyright, links = [], logo = {} } = footer || {};

  console.log(links);

  return (
    <Container>
      <ContainerWrapper>
        <About>
          <Logo>
            <LogoIcon />
            <LogoText />
          </Logo>
          <Description>
            We at ChilliCream build the ultimate GraphQL platform.
            <br />
            Most of our code is open-source and remains forever open-source.
            <br />
            You can be part of it by helping us starting today.
          </Description>
          <Connect>
            {/* todo: get links from docusaurus config */}
            <ConnectLink to="">
              <IconContainer>
                <GithubIcon />
              </IconContainer>{" "}
              to work with us on the platform
            </ConnectLink>
            <ConnectLink to="">
              <IconContainer>
                <SlackIcon />
              </IconContainer>{" "}
              to get in touch with us
            </ConnectLink>
            <ConnectLink to="">
              <IconContainer>
                <TwitterIcon />
              </IconContainer>{" "}
              to stay up-to-date
            </ConnectLink>
          </Connect>
        </About>
        <Links>
          <Title>General Links</Title>
          <Navigation>
            {navbar.items.map((item, index) => (
              // @ts-ignore
              <NavLink key={`topnav-item-${index}`} to={item.to}>
                {item!.label}
              </NavLink>
            ))}
          </Navigation>
        </Links>
        <Location>
          <Title>Documentation</Title>
          <Navigation>
            {/* todo: how to get links to all documented pages */}
            {/* {products!.map((product, index) => (
              <NavLink
                key={`products-item-${index}`}
                to={
                  product!.versions![0]!.path! === ""
                    ? `/docs/${product!.path!}/`
                    : `/docs/${product!.path!}/${product!.versions![0]!.path!}/`
                }
              >
                {product!.title}
              </NavLink>
            ))} */}
          </Navigation>
        </Location>
      </ContainerWrapper>
      <ContainerWrapper>
        <Copyright>© {new Date().getFullYear()} ChilliCream</Copyright>
      </ContainerWrapper>
    </Container>
  );
};

const Container = styled.footer`
  display: grid;
  place-items: center;

  padding: 40px 20px 60px;
  width: 100%;
  background-color: #252d3c;
  color: #c6c6ce;

  @media only screen and (min-width: 1440px) {
    padding: 40px 0 60px;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
`;

const About = styled.div`
  display: flex;
  flex: 5 1 auto;
  flex-direction: column;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const LogoIcon = styled(LogoIconSvg)`
  height: 40px;
  fill: #c6c6ce;
`;

const LogoText = styled(LogoTextSvg)`
  padding-left: 15px;
  height: 24px;
  fill: #c6c6ce;
`;

const Description = styled.p`
  font-size: 0.833em;
  line-height: 1.5em;
  margin-bottom: 10px;
`;

const Connect = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
`;

const ConnectLink = styled(Link)`
  flex: 0 0 auto;
  margin: 5px 0;
  font-size: 0.833em;
  text-decoration: none;
  color: #c6c6ce;
  transition: color 0.2s ease-in-out;

  > ${IconContainer} {
    margin-right: 10px;
    vertical-align: middle;

    > svg {
      transition: fill 0.2s ease-in-out;
    }
  }

  :hover {
    color: #fff;

    > ${IconContainer} > svg {
      fill: #fff;
    }
  }
`;

const GithubIcon = styled(GithubIconSvg)`
  height: 26px;
  fill: #c6c6ce;
`;

const SlackIcon = styled(SlackIconSvg)`
  height: 22px;
  fill: #c6c6ce;
`;

const TwitterIcon = styled(TwitterIconSvg)`
  height: 22px;
  fill: #c6c6ce;
`;

const Links = styled.div`
  display: none;
  flex: 2 1 auto;
  flex-direction: column;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const NavLink = styled(Link)`
  flex: 0 0 auto;
  margin: 4px 0;
  font-family: "Roboto", sans-serif;
  font-size: 0.833em;
  line-height: 1.5em;
  color: #c6c6ce;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  :hover {
    color: #fff;
  }
`;

const Location = styled.div`
  display: none;
  flex: 3 1 auto;
  flex-direction: column;
  padding: 0 20px;
  line-height: 1.5em;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const Title = styled.h3`
  margin: 15px 0 9px;
  font-size: 1em;
  font-weight: bold;
  color: #c6c6ce;
`;

const Copyright = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

export default Footer;
