import emailjs from '@emailjs/browser';
import React, {useRef,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTwitter, faFacebookSquare,  faInstagram } from '@fortawesome/free-brands-svg-icons' 
  import { faClose } from '@fortawesome/free-solid-svg-icons' 


 const About = () => {
  const form = useRef();

  const [isHide,setIsHide ]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
   setIsHide(true)
    emailjs.sendForm('service_w84f2ls', 'template_hmp1nom', form.current, 'ZdjRx2ZpvfgTEuvCB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleMsg=()=>{
    setIsHide(false )
  }
  return (
    <div className="container">
      <div className="about-container">
      {isHide && <div className ="success-msg">
        <p>message sent successfuly</p>
       <FontAwesomeIcon icon={faClose} className="msg-close" onClick={handleMsg}></FontAwesomeIcon>
      </div>} 
      <p className ="about-paragraph">We are EazyMart your convenient shopping partner of all time. We have great offers just for you can't wait to have you shop with us.<br/><br/>Don't hesitate to reach out to us for any queries and complaints, drop your message below. </p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" cols="7" rows="5"/>
      <button>send message</button>
    </form>
    <footer>
      <div className ="footer-icons">
      <h5>Follow us:</h5>
      <FontAwesomeIcon icon={faTwitter} className="twitter" ></FontAwesomeIcon>      <FontAwesomeIcon icon={faInstagram} className ="instagram"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFacebookSquare } className ="facebook"></FontAwesomeIcon>
     </div>
    </footer>
    </div>
    </div>
  );
};
export default About