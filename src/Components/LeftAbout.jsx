import React from "react";
import className from "./style/LeftAbout.module.css";
import photo from "../media/photo.jpg";

const LeftAbout = () => {
  return (
    <div className={className.Wrapper}>
      <img className={className.Photo} src={photo} alt="fhoto" width={"200px"}></img>
      <div className={className.ContactsWrapper}>
        <h3 className={className.ContactsTitle}>Contacts</h3>
        <div className={className.Contact}>
          <div className={className.contactType}>Phone:</div>
          <a className={className.ContactLink} href="tel:+380632154288">
            +38-063-215-42-88
          </a>
        </div>
        <div className={className.Contact}>
          <div className={className.contactType}>e-mail:</div>
          <a className={className.ContactLink} href="mailto:yevhen.alimov@gmail.com">
            yevhen.alimov@gmail.com
          </a>
        </div>
        <section className={className.Section}>
          <h3 className={className.SectionTitle}>Language</h3>
          <ul className={className.SectionList}>
            <li className={className.SectionListItem}>
              <span>English - pre intermediate</span>
            </li>
            <li className={className.SectionListItem}>
              <span>Ukrainian, Russian - native</span>
            </li>
          </ul>
        </section>
        <section className={className.Section}>
          <h3 className={className.SectionTitle}>Social</h3>
          <ul className={className.SectionList}>
            <li className={className.SectionListItem}>
              <a className={className.SocialLink} href="https://github.com/EugeneAlimov">
                GitHub
              </a>
            </li>
            <li className={className.SectionListItem}>
              <a className={className.SocialLink} href="https://www.linkedin.com/in/yevhen-alimov-514568208/">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LeftAbout;
