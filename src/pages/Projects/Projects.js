import React from "react";
import MainLayout from "../../components/Main Layout/Main Layout";
import Footer from "../../components/Dark Footer/Footer";
import { TitlePage, Title, SubTitle, MinorText, LineContainer, OnGoingProjectPage, SectionTitle, SectionSubTitle, ProjectsContainer, ProjectTab, ContactBtn } from "./Styles";
import Line from "../../images/Line.svg";

export default function Projects() {
    return (
        <MainLayout>
            <TitlePage>
                <Title>Projects</Title>
                <SubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SubTitle>
                <LineContainer>
                    <img src={Line} alt="scroll line" />
                    <MinorText>Scroll for more</MinorText>
                </LineContainer>
            </TitlePage>

            <OnGoingProjectPage>
                <SectionTitle>On-going Projects</SectionTitle>
                <SectionSubTitle>
                    nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
                </SectionSubTitle>
                <ProjectsContainer>
                    <ProjectTab>Club Promotion Website</ProjectTab>
                    <ProjectTab>Coming Soon...</ProjectTab>
                    <ProjectTab>Coming Soon...</ProjectTab>
                </ProjectsContainer>
                <ContactBtn href="/contacts">Contact Us</ContactBtn>
            </OnGoingProjectPage>

            <Footer />
        </MainLayout>
    );
};