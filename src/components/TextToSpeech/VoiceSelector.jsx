import React from "react";

const VoiceSelector = ({ voices, selectedVoice, onVoiceChange }) => {
    return (
        <div className="acao-box">
            <p>Selecione a voz:</p>
            <select
                id="selecao-voz"
                value={selectedVoice}
                onChange={onVoiceChange}
            >
                {voices.map((voice, index) => (
                    <option key={index} value={index}>
                        {voice.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VoiceSelector;
