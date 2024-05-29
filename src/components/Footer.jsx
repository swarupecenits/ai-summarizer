import React from 'react';
import { logo } from "../assets";

const Footer = () => {
    return (
        <div>
            <footer className="flex justify-center items-center w-full flex-col m-0 mt-1 gap-3 pb-5 rounded">
                <div className="border-t border-gray-300 w-full mb-3"></div>
                <nav className="grid grid-flow-col gap-7">
                    <a href="https://www.facebook.com/swarup.chanda.984?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="link link-hover cursor-pointer">
                        <i className="fi fi-brands-facebook"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/swarup-chanda-23053724a/' target="_blank" rel="noopener noreferrer" className="link link-hover cursor-pointer">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCDuvuuT8Rtgw1JPz84APl5A' target="_blank" rel="noopener noreferrer" className="link link-hover cursor-pointer">
                        <i className="fi fi-brands-youtube"></i>
                    </a>
                    <a href='https://www.instagram.com/this_is_swarup_/' target="_blank" rel="noopener noreferrer" className="link link-hover cursor-pointer">
                        <i className="fi fi-brands-instagram"></i>
                    </a>
                    <a href='https://github.com/swarupecenits' target="_blank" rel="noopener noreferrer" className="link link-hover cursor-pointer">
                        <i className="fi fi-brands-github"></i>
                    </a>
                </nav>

                <aside className='text-center pt-1'>
                    <p>Copyright © 2024 - AI Summarizer. All rights reserved </p>
                </aside>
                <div>
                    <p>
                        Made with{" "}
                        <span role="img" aria-label="Heart Emoji">
                            ❤️
                        </span>{" "}
                        by <span className='orange_gradient'>Swarup Chanda</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
