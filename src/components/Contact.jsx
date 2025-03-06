import React from "react";
import contactDetails from "./contact";
import SocialItem from "./SocialItem";

function Contact() {
  return (
    <div className="contact-grid">
      <div className="contact-grid-img"></div>
      <div className="contact-item contact-grid-details">
        <h1>Let's Talk</h1>
        <ul>
          {contactDetails.map((item) => (
            <SocialItem
              key={item.id}
              name={item.name}
              link={item.link}
              icon={item.icon}
              size="large"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
