import React from "react";

const ActionButton = ({ label, description, onClick, id }) => {
    return (
        <div className="acao-box">
            <p>{description}</p>
            <button id={id} onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default ActionButton;
