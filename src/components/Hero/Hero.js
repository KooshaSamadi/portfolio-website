import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this website is to show my experience and academic
          background
        </SectionText>

        <Link href="#projects">
          <Button onClick={props.handleClick}>Learn More </Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
