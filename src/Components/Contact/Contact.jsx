import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="Contact">
      <form action="https://formspree.io/f/mnndzroq" method="POST">
        <span id="title">Contact Us</span>
        <div className="list1">
          <label htmlFor="UserName">Name</label>
          <input name="username" type="text" required id="Username" placeholder="Enter Your Name"/>
        </div>
        <div className="list1">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required id="email" placeholder="Enter Your Email"/>
        </div>
        <div className="list1">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="mess" placeholder="Message here....."></textarea>
        </div>
        <button type="submit" className="loginbtn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
