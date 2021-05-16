import React from "react";
import Layout from "@theme/Layout";
import {
  ContentContainer,
  EnvelopeIcon,
  ImageContainer,
  Section,
  SectionRow,
  SectionTitle,
} from "../components/misc/marketing-elements";
import ContactUsSvg from "../images/contact-us.svg";
import { SalesPartial } from "../partials/sales-partial";
import { Hero, Intro, Teaser, Title } from "../components/misc/page-elements";
import { GlobalStyle } from "../components/misc/global-style";

export default function SupportPage() {
  const areaTitle = "Service & Support";

  return (
    <Layout
      title={areaTitle}
      description="Description will go into a meta tag in <head />"
    >
      {/* todo: insert this globally into the layout */}
      <GlobalStyle />

      <Intro>
        <Title>{areaTitle}</Title>
        <Hero>Get quick access to ChilliCream experts</Hero>
        <Teaser>
          Efficiency is everything. Make your team more productive and ship your
          product faster to market. Get immediate access to a pool of
          ChilliCream experts which will support you along your journey.
        </Teaser>
      </Intro>
      <Section>
        <SalesPartial></SalesPartial>
      </Section>
      <Section>
        <SectionRow>
          <ImageContainer>
            <ContactUsSvg />
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Get in Touch</SectionTitle>
            <p>
              Want to learn more? Get the right help for your team and reach out
              to us today. Write us an{" "}
              <a href="mailto:contact@chillicream.com">
                <EnvelopeIcon />
              </a>{" "}
              and we will come back to you shortly!
            </p>
          </ContentContainer>
        </SectionRow>
      </Section>
    </Layout>
  );
}
