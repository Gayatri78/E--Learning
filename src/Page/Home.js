import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style/Home.css';
import video2 from '../Images/vedio4.mp4';
import video3 from '../Images/vedio6.mp4';
import video1 from '../Images/vedio5.mp4';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SavingsIcon from '@mui/icons-material/Savings';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import TaskIcon from '@mui/icons-material/Task';
import Student1 from '../Images/studnt.avif';
import Student2 from '../Images/student2.avif';
import Student3 from '../Images/student3.jpg';
import vediohome from '../Images/vedio1.mp4';
import ImgGetStartHome from '../Images/code11.png'



function Home() {

  return (
    <div className="home">
      {/* {new } */}

      <Carousel showThumbs={false} className="carousel" nextButtonClassName="custom-next-button">
        <div className="carousel-image-wrapper">
          <video src={video1} autoPlay loop muted alt="Slide 3"></video>
          <div className="carousel-text">
            <h1>Welcome to e-Guru</h1>
            <p>"Unlock Coding Skills Anytime, Anywhere!"</p>
          </div>
        </div>

        <div className="carousel-image-wrapper">
          <video src={video2} autoPlay loop muted alt="Slide 3"></video>
          <div className="carousel-text">
            <h1>Empower Your coding Journey</h1>
            <p>"Let's kick things off by diving into coding from scratch, starting with the fundamental first program every programmer learns on their own 'hello world!' So, let's embark on this journey with that classic phrase!"</p>
          </div>
        </div>


        <div className="carousel-image-wrapper">
          <video src={video3} autoPlay loop muted alt="Slide 3"></video>
          <div className="carousel-text1">
            <h1 style={{ fontSize: '30px', color: 'black' }}>Learn through interactive videos</h1>
            <a href="/courses"><button className="start-button">let's Explore!</button></a>
          </div>
        </div>

      </Carousel>

      {/* new div */}
      <div className='container home2'><br />
        <hr style={{ borderColor: 'black' }} /><br /><br />
        <h2 style={{ fontSize: '30px', justifyContent: 'center', textAlign: 'center' }}>Invest in your career with e-GURU</h2>
        <p className='homepara'>Discover the perfect courses to nurture your skills and pave the way for a brighter future tailored just for you!</p>
      </div>

      {/* new div */}
      <div className='container home3 mx-3'><br></br>
        <hr style={{ borderColor: 'black' }} />
        <div className='card1'>
          <LocalLibraryIcon className="icon-blue" style={{ fontSize: '75px' }}></LocalLibraryIcon>
          <h4 className='card1T'>Learn anything</h4>
          <p className='container card1C'>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
        </div>
        <div className='card1'>
          <SavingsIcon className="icon-blue" style={{ fontSize: '75px' }}></SavingsIcon>
          <h4 className='card1T'>Save money</h4>
          <p className=' container card1C'>Spend less money on your learning if you plan to take multiple courses this year</p>
        </div>
        <div className='card1'>
          <ModelTrainingIcon className="icon-blue" style={{ fontSize: '75px' }}></ModelTrainingIcon>
          <h4 className='card1T'>Flexible learning</h4>
          <p className='container card1C'>Learn at your own pace, move between multiple courses, or switch to a different course</p>
        </div>
        <div className='card1'>
          < TaskIcon className="icon-blue" style={{ fontSize: '75px' }}></TaskIcon>
          <h4 className='card1T'>Unlimited certificates</h4>
          <p className='container card1C'>Earn a certificate for every learning program that you complete at no additional cost</p>
        </div>
      </div>


      {/* new div */}

      <div className='home5' >
        <br></br>
        <hr style={{ borderColor: 'black' }} />
        <br></br>

        <div className="videoHomeDiv">
          <div className="videoDiv">
            <video width="560" height="325" controls>
              <source src={vediohome} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content">
            <h2 className="heading"> Transform your life through education!</h2>
            <p className="about">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</p>
          </div>
        </div>
      </div>


      {/* new div student */}

      <div className='home4'> <br></br>
        <hr style={{ borderColor: 'black' }} />
        <br></br>
        <div className='container home2'>
          <h2 style={{ fontSize: '30px', justifyContent: 'center', textAlign: 'center' }}>Join thousands of e-GURU learners achieving their goals</h2>
          <p className='homepara'>77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more. </p>
        </div>
      </div>
      <br></br><br></br>
      <div className='container student-info mx-3'>

        <div className='studentcard1 mx-4'>
          <img src={Student1} className="imghover" style={{ width: '200px', height: '200px' }} />
          <p className='container ' style={{ fontSize: '17px' }}>e-GURU is my constant source of motivation in learning to code. With each course, my subscription becomes more invaluable. While I prioritize mastering coding skills, e-GURU also caters to my curiosity in related fields like technology and programming languages. Its diverse offerings guarantee access to almost any coding topic imaginable! <br /><br />Maria| India</p>
        </div>

        <div className='studentcard1 mx-4'>
          <img src={Student2} className="imghover" style={{ width: '200px', height: '200px' }} />
          <p className='container ' style={{ fontSize: '17px' }}> e-GURU is my constant source of motivation in learning to code. With each course, my subscription becomes more invaluable. While I prioritize mastering coding skills, e-GURU also caters to my curiosity in related fields like technology and programming languages. Its diverse offerings guarantee access to almost any coding topic imaginable!<br /><br /> Harry| India</p>
        </div>

        <div className='studentcard1 mx-4'>
          <img src={Student3} className="imghover" style={{ width: '200px', height: '200px' }} />
          <p className='container ' style={{ fontSize: '17px' }}>e-GURU is my constant source of motivation in learning to code. With each course, my subscription becomes more invaluable. While I prioritize mastering coding skills, e-GURU also caters to my curiosity in related fields like technology and programming languages. Its diverse offerings guarantee access to almost any coding topic imaginable!<br /><br />Malia| India</p>
        </div>
      </div>

      {/* new */}

      <div className='home6'>
        <br></br>
        <hr style={{ borderColor: 'black' }} />
        <br></br>

        <div className="home6Div">
          <div className="backgroundColorDiv"></div>
          <img src={ImgGetStartHome} className="Getstartimg" style={{ width: '560px', height: '325px' }} />
          <div className="contentDiv">
            <h2 className="heading">Learning that gets you!!</h2>
            <p className="about">
              Unlock learning that shapes your present and future. Dive into skills essential for today and tomorrow. Start your journey with us.
            </p>
            <a href="/courses"><button className="getstartedButton" ><span class="buttontext">Explore Courses</span></button> </a>
          </div>
        </div>
      </div>


      <div>
      </div>
    </div>
  );
}

export default Home;
