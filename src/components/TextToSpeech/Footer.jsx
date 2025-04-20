import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
            <p className="footer-credits">
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    <span className="link-text">Cleiton Santos</span>
                    <FaExternalLinkAlt className="link-icon" />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
