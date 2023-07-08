import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="c">
            {/* <div className="c-bg"></div> */}
            <div className="c-wrapper">
                <div className="c-title">Get In Touch</div>
                <div className="c-social">
                    <a href="mailto:debadrita.official12@gmail.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/debadrita-bhattacharyya-28328b1ba" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/debadrita612" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/_debadrita.__/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100069289312559" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                </div>
                <div className="c-footer">
                    <p>© All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
