import './App.css';
import Header from './Header';
import chrono from './chrono.png'
import todolist from './todolist.png'
import mountain from './mountain.svg'
import calculator from './calculator.svg'
import side from './side.png';
import game from './game.png'
import cv from './asmaa larche.png';
import { BsWhatsapp , BsFacebook , BsInstagram , BsLinkedin , BsGithub } from "react-icons/bs"
function App() {
  return (
   <>
   <Header />
   <main>
    <section id='About-Section'>
        <h1>ABOUT</h1>
        <p> Welcome to my Portfolio!

I am a junior full-stack web developer with a passion for creating functional, efficient, and visually appealing websites and apps. With a strong knowledge of HTML, CSS, JavaScript, and the React framework, I am able to create fully-functional projects that can be used on all platforms.
I am a creative problem solver and have no hesitation in tackling complex tasks. I strive for quality and efficiency in all my projects and am always looking for ways to improve my skills. I am excited to take on any challenge and make a meaningful contribution to projects.</p>
    </section>
    <section id='Projects-Section'>
    <h1>MY PROJECTS</h1>
    <div className="boxes">
      <div  className='box'>
  <img src={chrono} alt="" />
  <a href='https://asmaa112.github.io/timer/'  target="_blank" rel="noreferrer"> Timer</a>
      </div>
      <div className='box'>
        <img src={todolist} alt="" />
        <a href='https://asmaa112.github.io/todo/' target="_blank" rel="noreferrer">To Do List</a>
      </div>
      <div className='box'>
        <img src={mountain} alt="" />
        <a href='https://asmaa112.github.io/hello-there/' target="_blank" rel="noreferrer">Hello There</a>
      </div>
      <div className='box'>
        <img src={calculator} alt="" />
        <a href='https://asmaa112.github.io/calculatrice/' target="_blank" rel="noreferrer">Calculator</a>
      </div>
      <div className='box'>
        <img src={side} alt="" />
        <a href='https://asmaa112.github.io/sidebar1/' target="_blank" rel="noreferrer">Side-bar</a>
      </div>
      <div className='box'>
        <img src={game} alt="" />
        <a href='https://asmaa112.github.io/game/' target="_blank" rel="noreferrer">game</a>
      </div>
    </div>
    
    </section>

    <section id="section-cv">
            <h1>CV</h1>
            <a href={cv} download="cv">DOWNLOAD CV </a>
      </section>

    <section id='Contact-Section'>
        <h1>CONTACT</h1>
        <form className='formulaire'>
          <label>Full Name :</label>
          <input type='text' onChange={(e)=>{ console.log(e.target.value)}}/>
          <label>Email :</label>
          <input type='text'/>
          <label>Message : </label>
         <textarea></textarea> 
         <button>Submit</button>
        </form>
        
    </section>

   </main>
   <footer> 
     <div className='links'>
            <a href="https://www.facebook.com/profile.php?id=100073909911281" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://www.instagram.com/urfav.aae/?hl=fr" target="_blank" rel="noreferrer"><BsInstagram/></a>
            <a href="https://wa.me/0771103499" target="_blank" rel="noreferrer"> <BsWhatsapp/></a>
            <a href="https://www.linkedin.com/in/cn-asmaa-006930235/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/asmaa112" target="_blank" rel="noreferrer"> <BsGithub/></a>
      </div>
        <p> © 2022-2023 Casablanca</p>
   </footer>
   </>
  );
}

export default App;

// npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
//
// 
