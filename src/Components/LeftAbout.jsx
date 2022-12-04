import React from "react";
import className from "./style/LeftAbout.module.css";
import photo from '../media/photo.jpg'

const LeftAbout = () => {
  return (
    <div className={className.Wrapper}>
      <img className={className.Photo} src={photo} alt='fhoto' width={'200px'}></img>
      <div className={className.ContactsWrapper}>
        <div>Contacts</div>
        <div>PHONE:</div>
        <a href="tel:+380632154288">+38-063-215-42-88</a>
        <div>e-mail:</div>
        <a href="mailto:yevhen.alimov@gmail.com">yevhen.alimov@gmail.com</a>

      </div>
    </div>
  );
};

export default LeftAbout;
