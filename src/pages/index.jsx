/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0} />
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>Hi, I&apos;m Michael Bonner</BigTitle>
          <Subtitle>
            I build websites, apps, and software for people I like
            <br />
            (no exceptions).
          </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Quiznado"
              link="https://quiznado.com/"
              bg="linear-gradient(to right, #3EA1AD 0%, #51D1E1 100%)"
            >
              A quiz game for parents to incentivize kids to learn. Built using Angular, Ionic and Laravel.
            </ProjectCard>
            <ProjectCard
              title="Legit Local"
              link="https://legitlocal.com"
              bg="linear-gradient(to right, #F4A637 0%, #F8A927 100%)"
            >
              A SaaS application to help local businesses to connect with their customers. Built with Laravel and React.
            </ProjectCard>
            <ProjectCard
              title="Redirects Wizard"
              link="https://github.com/shekki25/redirects-wizard"
              bg="linear-gradient(to right, #009FFF 0%, #ec2F4B 100%)"
            >
              A tool to help find and address 404s, even before the site goes live. Built with Laravel and Vue.
            </ProjectCard>
            <ProjectCard title="Your Project" link="#" bg="linear-gradient(to right, #b91d73 0%, #f953c6 100%)">
              Whatever we build next can go up here.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2} />
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3} />
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Michael Bonner" />
            <AboutSub>I have over 15 years of development experience, and 5 years of agency experience.</AboutSub>
          </AboutHero>
          <AboutDesc>
            I know what works, what doesn't work, and why. I can use that knowledge to build you a site, mobile app, or
            software that accomplishes exactly the goals you are trying to acomplish. I'll sit with you and your team,
            we'll make a plan, and we'll stick to it.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave />
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:michaelwbonner@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/michaelbonner/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/mbonner4">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Michael Bonner. <a href="https://github.com/shekki25/michaelwbonner.com">Github</a>.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4} />
    </Parallax>
  </React.Fragment>
);

export default Index;
