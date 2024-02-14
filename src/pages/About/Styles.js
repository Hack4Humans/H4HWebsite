import styled from "styled-components";

export const AboutPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFEFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const Title = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    text-align: right;
    margin: 0px 160px 0px 0px;
`;

export const MajorText = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: lighter;
    font-size: 25px;
    text-align: right;
    width: 700px;
    margin: 0px 160px 0px 0px;
`;

export const MinorText = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    text-align: center;
    margin: 5px 0px 0px 0px;
`;

export const LineContainer = styled.div`
    position: absolute;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 200px 0px 0px 0px;
`;

export const ProjectPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFEFB;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-end;
    flex-wrap: nowrap;
`;

export const ProjectLeft = styled.div`
    height: 90vh;
    width: 60vw;
    background-color: #FFFEFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    flex-wrap: nowrap;
`;

export const ProjectRight = styled.div`
    height: 90vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const SectionTitle = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    margin-left: 15%;
`;

export const SectionSubTitle = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #161313
`;

export const SectionContent = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    width: 30vw; 
    margin-top: 3%;
    margin-bottom: 3%;
    color: #161313
`;

export const HalfSubSection = styled.div`
    height: 15vh;
    width: 25vw;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const SubIdea = styled.div`
    height: 15vh;
    width: 12.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    flex-wrap: nowrap;
`;

export const SubIdeaTitle = styled.p`
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin-left: 1vw;
    color: #161313;
`;

export const SubIdeaText = styled.p`
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 100;
    font-size: 10px;
    line-height: 13px;
    color: #161313;
`;

export const ImageContainer = styled.div`
    position: absolute;
    margin-right: 20vw;
    margin-top: 20vh;
`;

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 500px;
    margin-right: 15vw;
    margin-top: 15vh;

    background-color: #F9F7F1;
`;

export const JoinPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F9F7F1;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-end;
    flex-wrap: nowrap;
`;

export const HalfPage = styled.div`
    height: 90vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: baseline;
    flex-wrap: nowrap;
`;

export const ImageContainer2 = styled.div`
    position: absolute;
    margin-left: 5vw;
`;

export const ButtonFilled = styled.button`
    height: 6vh;
    width: 12vw;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    background: #383838;
    border-radius: 10px;
    color: #FFFEFB;
    align-items: center;
`;

export const SectionPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFEFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;

export const SectionTitle2 = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
`;

export const SectionContent2 = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    width: 48vw;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #161313;
    margin: 2%;
`;

export const ButtonContainer = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: Center;
    align-items: Center;
    flex-wrap: nowrap;
    column-gap: 30px;
`;

export const ButtonClear = styled.button`
    height: 6vh;
    width: 12vw;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    border: none;
    border-radius: 10px;
    color: #161313;
    align-items: center;
`;