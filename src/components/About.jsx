import React from 'react'; 
import profile from "../images/profile-pic.jpg";

function About() {
  return (
    <>
      <img alt="profile pic" className="about-me-image" src={profile} />
      <a href="/" name="about" className="link-container">
        <h2>About Me</h2>
        <p className="about-me-description">
          Known for my professionalism, dedication, integrity, and passion.  I'm skilled in developing web designs, testing, and 
          implementing clean code into production.
        </p>
        <h3>Summary of Qualifications:</h3>
        <ul className="list">
          <li>Exceptionally well organized, great communicator, and highly motivated</li>
          <li>Highly effective in developing and maintaining a positive and productive work environment</li>
          <li>Effective leader; able to prioritize my (as wells as the team) workload and motivate others</li>
          <li>Detailed oriented and skilled in setting priorities</li>
          <li>Work creatively and effectively with peers and management</li>
          <li>Work well independently and as member of a team</li>
          <li>Able to plan, develop, test, and implement activities on time</li>
        </ul>
      </a>
      <div className="border-bottom"></div>
    </>
  )
}

export default About; 