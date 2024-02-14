import React from 'react'
import "./Styles.css";
import Twitter  from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";
import Instagram from "../../images/instagram.svg";
import President from "../../images/Headshot/Jay Headshot.jpeg";
import VicePresident from "../../images/Headshot/Luke Headshot.jpg";
import Treasurer from "../../images/Headshot/Elena Headshot.jpg";
import EventPlanner from "../../images/Headshot/John Headshot.jpeg";
import Footer from '../../components/Dark Footer/Footer';

const PersonCard = ({ name, role, twitter, linkedin, instagram, image }) => {
  return (
    <div className='personCard'>
      <div className='personImgContainer'>
        <img className='headshot' src={image} alt="" />
      </div>
      <div className='personInfoContainer'>
        <div className='personTitleContainer'>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
        <div className='cardSocialContainer'>
          {twitter && <a href={twitter} ><img className='cardSocialImg' src={Twitter} alt="twitter" /></a>}
          {linkedin && <a href={linkedin} ><img className='cardSocialImg' src={LinkedIn} alt="linkedin" target="_blank"/></a>}
          {instagram && <a href={instagram}><img className='cardSocialImg' src={Instagram} alt="instagram" /></a>}
        </div>
      </div>
    </div>
  )
}

const Leadership = () => {
  return (
    <div className='leadershipContainer'>
      <div className='leadershipHeadingDiv'>
        <h3>Leadership</h3>
        <p>Leaders drive innovation, inclusivity, and collective growth.</p>
      </div>
      <div className='cardsDiv'>
        <PersonCard name="Jay Jung" role="President" image={President} linkedin="https://www.linkedin.com/in/juhwan-jung/"/>
        <PersonCard name="Bryan Luke Shabroski" role="Vice President" image={VicePresident} linkedin="https://www.linkedin.com/in/bryan-shabroski-514380236/"/>
        <PersonCard name="Elena Choi" role="Treasurer" image={Treasurer} linkedin="https://www.linkedin.com/in/elena-choi/"/>
        <PersonCard name="John Choi" role="Event Planner" image={EventPlanner}linkedin="https://www.linkedin.com/in/choi-yongjun/"/>
      </div>
      <Footer />
    </div>
  )
}

export default Leadership;