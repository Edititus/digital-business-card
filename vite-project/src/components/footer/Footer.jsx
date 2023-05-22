import './footer.css';
import Twitter from "../../assets/TwitterIcon.png";
import Instagram from "../../assets/InstagramIcon.png";
import Github from "../../assets/GitHubIcon.png";
import LinkedIn from "../../assets/LinkedinIcon.png";


const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://twitter.com/Ediomo_Titus">
  <img src={Twitter} alt="Twitter" className="icons" /></a>
  <a href="https://www.instagram.com/teeedee/?igshid=ZWIzMWE5ZmU3Zg%3D%3D" ><img src={Instagram} alt="Instagram" className="icons" /></a>
  <a href="https://github.com/Edititus" ><img src={Github} alt="Github" className="icons" /></a>
  <a href= "https://www.linkedin.com/in/ediomo-titus-30398219b/"><img src={LinkedIn} alt="LinkedIn" className="icons" /></a>
    </div>
  )
}

export default Footer