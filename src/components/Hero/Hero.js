import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nonpadding>
  <LeftSection>
  <SectionTitle main center>
    Welcome to <br/>
    My Personal Portfolio
  </SectionTitle>
  <SectionText>
    What I will be offering to employers
  </SectionText>
  <Button onClick={()=> window.location="mailto:lopez450@cougars.csusm.edu"}>Contact Me</Button>

  </LeftSection>

  </Section>
);

export default Hero;