import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harsh-siddhapura-286723258/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=harshsiddhapura5557@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/harsh-siddhapura-5557",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Mobile",
    link: "tel:+919714475575",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#075E54", // Reference https://simpleicons.org/?q=github
  },
];

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} {...props}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
}
