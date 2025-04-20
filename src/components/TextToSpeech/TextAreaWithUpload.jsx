import React, { useRef } from "react";

const TextAreaWithUpload = ({ text, onTextChange, onFileUpload }) => {
    const fileInputRef = useRef(null);

    return (
        <div id="entrada-de-conteudo">
            <textarea
                placeholder="Digite alguma coisa..."
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
            ></textarea>
            <div>
                <label htmlFor="upload-arquivo" id="arquivo-label">
                    Enviar arquivo
                </label>
                <input
                    type="file"
                    id="upload-arquivo"
                    accept=".txt"
                    ref={fileInputRef}
                    onChange={onFileUpload}
                />
            </div>
        </div>
    );
};

export default TextAreaWithUpload;
