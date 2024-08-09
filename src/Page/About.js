import React from 'react';
import '../Style/Aboutus.css';
import aboutimg1 from '../Images/code1.avif';
import aboutimg2 from '../Images/code7.avif';
import aboutimg3 from '../Images/code14.jpeg';
import aboutimg4 from '../Images/code15.jpg';
import { OndemandVideo as OndemandVideoIcon, Stars as StarsIcon, AllInclusive as AllInclusiveIcon } from '@mui/icons-material'; // Import Material-UI icons


function About() {

  // Inline FeatureCard component
  const FeatureCard = ({ icon, heading, para }) => (
    <div className="featureCard">
      <div className="iconContainer">{icon}</div>
      <h3 className="featureHeading">{heading}</h3>
      <p className="featurePara">{para}</p>
    </div>
  );

  return (
    <>
      <div className="container div2">
        <h1 className="divh1 underline ">WHY CHOOSE <span className="word">e-GURU</span>? </h1>
        <p>"At e-Guru,we're passionate about empowering individuals to master the art of coding. Whether you're a beginner taking your first steps into the world of programming or an experienced developer looking to refine your skills, we have the resources and support you need to succeed!"
        </p><br></br><br></br>
        <hr style={{ borderColor: 'black' }} />

        <div className="aboutusDiv1">
          <div className="backgroundColorDiv1"></div>
          <img
            src={aboutimg1}
            alt="aboutusImg1"
            className="aboutusImg1">
          </img>

          <div className="contentDiv1">
            <h2 className="heading1">Comprehensive Curriculum</h2>
            <p className="about1">
              Explore a wide range of programming languages, frameworks, and technologies, from the basics of HTML and CSS to advanced topics like machine learning and cloud computing.
            </p><br /><br />
   

          </div>
        </div>

        {/* div2 */}

        <div className="aboutusDiv1">
          <div className="backgroundColorDiv1"></div>
          <div className="contentDiv2">
            <h2 className="heading1">Interactive Learning</h2>
            <p className="about1">
              Engage with hands-on coding exercises, projects, and quizzes that reinforce your understanding and help you apply your knowledge in practical scenarios. Our interactive learning approach makes learning programming fun and effective.
            </p>
          </div>

          <img
            src={aboutimg2}
            alt="aboutusImg2"
            className="aboutusImg1">
          </img>

        </div>

        {/* new div */}
        <div className="aboutusDiv1">
          <div className="backgroundColorDiv1"></div>
          <img
            src={aboutimg3}
            alt="aboutimg2"
            className="aboutusImg1">
          </img>

          <div className="contentDiv1">
            <h2 className="heading1">Flexibility</h2>
            <p className="about1">
              Study at your own pace, on your own schedule, and from anywhere in the world. Our flexible learning platform adapts to your lifestyle, allowing you to learn programming whenever and wherever you want.
            </p>
          </div>
        </div>

        {/* new div */}

        <div className="aboutusDiv1">
          <div className="backgroundColorDiv1"></div>
          <div className="contentDiv2">
            <h2 className="heading1">Cost-Free Learning</h2>
            <p className="about1">
              Gain unlimited access to our extensive library of programming tutorials, courses, and resources at absolutely no cost. Learning should never be restricted by financial limitations.
            </p>
          </div>
          <img
            src={aboutimg4}
            alt="aboutusImg2"
            className="aboutusImg1">
          </img>
        </div>
      </div>

      
      {/* Feature cards */}

      <div className="featureDiv1">
      <FeatureCard
        icon={<OndemandVideoIcon className="icon" />}
        heading={"130,000 online courses"}
        para={"Enjoy a variety of fresh topics"}
      />
      <FeatureCard
        icon={<StarsIcon className="icon" />}
        heading={"Expert instruction"}
        para={"Find the right instructor for you"}
      />
      <FeatureCard
        icon={<AllInclusiveIcon className="icon" />}
        heading={"Lifetime access"}
        para={"Learn on your schedule"}
      />
    </div>

      {/* new div */}

      <div className="BackgroundImgDiv">
        <div className="aboutBackgroundImg">
          <h2>Get personal learning recommendations</h2>
          <p>Answer a few questions for your top picks</p>
          <a href="/faq"><button className="getstartedButton">Get Started</button> </a>
        </div>
      </div>
    </>

  )
}

export default About