import React, { FunctionComponent } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ContentContainer,
  ImageContainer,
  Section,
  SectionRow,
  SectionTitle,
} from "../components/misc/marketing-elements";
import { Hero, Intro, Teaser, Title } from "../components/misc/page-elements";
import { GlobalStyle } from "../components/misc/global-style";

const PlatformPage: FunctionComponent = () => {
  return (
    <Layout title="Platform">
      {/* todo: insert this globally into the layout */}
      <GlobalStyle />
      <Intro>
        <Title>The ChilliCream GraphQL Platform</Title>
        <Hero>
          An end-to-end solution to build, manage and access your GraphQL API
        </Hero>
        <Teaser>
          The heart of the ChilliCream platform is Hot Chocolate our core for
          the GraphQL client and server. The ChilliCream platform provides
          developer tools and services to speed up the entire development
          process.
        </Teaser>
      </Intro>
      <Section>
        <SectionRow>
          <ImageContainer large>
            <img src="/img/hot-chocolate-console.png" />
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Hot Chocolate</SectionTitle>
            <p>
              Hot Chocolate is our GraphQL server and provides core libraries
              for Strawberry Shake, our GraphQL client, and our GraphQL tools.
              No wonder why Hot Chocolate is the ChilliCream's platform core.
            </p>
            <Link to="/docs/hotchocolate">Learn more</Link>
          </ContentContainer>
        </SectionRow>
      </Section>
      <Section>
        <SectionRow>
          <ImageContainer large>
            <img src="/img/banana-cake-pop.png" />;
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Banana Cake Pop</SectionTitle>
            <p>
              Banana Cake Pop is our tool to explore schemas, execute operations
              and get deep performance insights about any GraphQL server out
              there.
            </p>
            <Link to="/docs/bananacakepop">Learn more</Link>
          </ContentContainer>
        </SectionRow>
      </Section>
      <Section>
        <SectionRow>
          <ImageContainer>
            <img src="/img/under-construction.svg" />
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Strawberry Shake</SectionTitle>
            <p>
              Strawberry Shake is our client tool to generates custom .Net
              clients for any GraphQL endpoint.
            </p>
            <Link to="/docs/strawberryshake">Learn more</Link>
          </ContentContainer>
        </SectionRow>
      </Section>
      <Section>
        <SectionRow>
          <ImageContainer>
            <img src="/img/under-construction.svg" />
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Marshmallow Pie</SectionTitle>
            <p>
              Keep track of all clients that depend on your GraphQL endpoints.
            </p>
            {/* comment in again, once there is documentation */}
            {/* <Link to="/docs/marshmallowpie">Learn more</Link> */}
          </ContentContainer>
        </SectionRow>
      </Section>
    </Layout>
  );
};

export default PlatformPage;
