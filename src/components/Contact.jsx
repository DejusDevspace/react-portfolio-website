import React from "react";

function Contact() {
  return (
    <div class="contact-grid">
      <div class="contact-grid-img"></div>
      <div class="contact-item contact-grid-details">
        <h1>Let's Talk</h1>
        <ul>
          <div class="social-link">
            <img src="assets/img/whatsapp-svgrepo-com.svg" alt="phone-icon" />
            <li>+2347016035694</li>
          </div>
          <div class="social-link">
            <img
              src="assets/img/mail-open-minus-svgrepo-com.svg"
              alt="mail-icon"
            />
            <li>ojomideju2003@gmail.com</li>
          </div>
          <div class="social-link">
            <a href="https://www.linkedin.com/in/deju-adejo">
              <img
                src="assets/img/linkedin-161-svgrepo-com.svg"
                alt="linkedin-icon"
              />
            </a>
            <li>
              <a href="https://www.linkedin.com/in/deju-adejo">LinkedIn</a>
            </li>
          </div>
          <div class="social-link">
            <a href="https://github.com/DejusDevspace">
              <img
                src="assets/img/github-142-svgrepo-com (1).svg"
                alt="github-icon"
              />
            </a>
            <a href="https://github.com/DejusDevspace">
              <li>DejusDevspace</li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
