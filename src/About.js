import emailjs from '@emailjs/browser';
import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 


 const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container">
      <p>We are EazyMart your convenient shopping partner of all time. We have great offers just for you can't wait to have you shop with us. </p>
      <p>Don't hesitate to reach out to us for any queries and complaints, drop your message below. </p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button>send message</button>
    </form>
    <footer>
      <h5>Follow us:</h5>
      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>      <FontAwesomeIcon icon={faInstagra}></FontAwesomeIcon>

    </footer>
    </div>
  );
};
export default About