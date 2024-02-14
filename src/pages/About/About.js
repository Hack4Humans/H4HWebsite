import MainLayout from "../../components/Main Layout/Main Layout";
import { AboutPage, Title, MajorText, MinorText, LineContainer, ProjectPage, 
    ProjectLeft, ProjectRight, SectionTitle, SectionSubTitle, SectionContent,
    HalfSubSection, SubIdea, SubIdeaTitle, SubIdeaText, ImageContainer, JoinPage,
    HalfPage, ButtonFilled, SectionPage, SectionTitle2, SectionContent2, ButtonClear,
    ButtonContainer, BackgroundContainer, ImageContainer2} from "./Styles";
import Line from "../../images/Line.svg";
import LightBulb from "../../images/LightBulb.svg";
import Bubble from "../../images/bubble.svg";
import Tag from "../../images/tag.svg";
import Star from "../../images/star.svg";
import JoinPhotos from "../../images/JoinPhotos.svg"
import ComputerScreen from "../../images/ComputerScreen.svg"
import Footer from "../../components/Dark Footer/Footer";

export default function About() {
    //project page requires major overhaul/rework
    //join page also requires overhaul (implement a shrink/cover of images as page size shrinks)
    return (
        <MainLayout>

            <AboutPage>
                <Title>About Us</Title>
                <MajorText>
                <div>Welcome to the Ladybug Development Club!</div> WE ARE a vibrant community passionate for computer 
                science and programming. Our club is a melting pot of diverse talents, 
                united by a shared love for technology and the drive to turn ideas into reality.
                </MajorText>
                <LineContainer>
                    <img src={Line} alt="scroll line" />
                    <MinorText>Scroll for more</MinorText>
                </LineContainer>
            </AboutPage>

            <ProjectPage>
                <ProjectLeft>
                    <SectionTitle>We make something FUN</SectionTitle>
                    <SectionSubTitle>Bring your fresh ideas to the table</SectionSubTitle>
                    <SectionContent>We believe in the power of collaboration and creativity. We thrive in an environment where every challenge is an opportunity for growth. Our passion is the driving force behind every project, ensuring that each task is approached with precision, dedication, and a touch of uniqueness.</SectionContent>
                    <HalfSubSection>
                        <SubIdea>
                            <img src={LightBulb} alt="lightbulb" />
                            <SubIdeaTitle>Brainstorming</SubIdeaTitle>
                            <SubIdeaText>Bring up all ideas<br/>No limitation at all</SubIdeaText>
                        </SubIdea>
                        <SubIdea>
                            <img src={Bubble} alt="bubble" />
                            <SubIdeaTitle>Planning</SubIdeaTitle>
                            <SubIdeaText>Make a plan on how to<br/>bring brilliant ideas to life</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                    <HalfSubSection>
                        <SubIdea>
                            <img src={Tag} alt="tag" />
                            <SubIdeaTitle>Implementation</SubIdeaTitle>
                            <SubIdeaText>Distribute the work,<br/>tackle the work with everyone</SubIdeaText>
                        </SubIdea>
                        <SubIdea>
                            <img src={Star} alt="star" />
                            <SubIdeaTitle>Release</SubIdeaTitle>
                            <SubIdeaText>Surprise the world with<br/>your creation</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                </ProjectLeft>
                <ProjectRight>
                    <BackgroundContainer/>
                    <ImageContainer>
                        <img src={ComputerScreen} alt="computer screen"/>
                    </ImageContainer>        
                </ProjectRight>
            </ProjectPage>

            <JoinPage>
                <HalfPage>
                    <ImageContainer2>
                        <img src={JoinPhotos} alt="join photos"/>
                    </ImageContainer2>
                </HalfPage>
                <HalfPage>
                    <SectionTitle>How to Join the Club</SectionTitle>
                    <SectionSubTitle>Open to everyone and fuled by diversity</SectionSubTitle>
                    <SectionContent>Our club embraces individuals from varied backgrounds, recognizing that diversity fuels innovation. We're committed to fostering a collaborative space where passion for technology meets a drive for creativity. Here, your ideas are celebrated, your skills are refined, and your contributions make a difference. Join us in shaping the future through learning, growth, and collective creativity.</SectionContent>
                        <ButtonFilled>Join the mailing list</ButtonFilled>
                </HalfPage>
            </JoinPage>

            <SectionPage>
                <SectionTitle2>Support Our Club!</SectionTitle2>
                <SectionSubTitle>We are still seeking donations</SectionSubTitle>
                <SectionContent2>Join us in making a difference! Your support plays a vital role in empowering our club's mission to foster innovation and learning in the realm of technology. Every contribution, big or small, helps us provide a rich environment for our members to thrive, offering workshops, resources, and collaborative projects. <br/>Your generosity enables us to expand our reach, nurture talent, and build a community where ideas flourish and future tech leaders grow. Be a part of our journey towards creating a brighter, tech-driven future by supporting our club today. Together, we can achieve remarkable things!<br/>
                    </SectionContent2>
                <ButtonContainer>
                    <ButtonClear>Contact President</ButtonClear>
                    <ButtonClear>Contact Treasurer</ButtonClear>
                </ButtonContainer>
            </SectionPage>
            
            <Footer/>
        </MainLayout>
    );
};