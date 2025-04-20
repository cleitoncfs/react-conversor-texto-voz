import React from "react";
import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Todos os direitos reservados -
                Desenvolvido por Cleiton Santos 💻📳
            </p>
        </footer>
    );
};

export default Footer;
