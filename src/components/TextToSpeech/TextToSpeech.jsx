import React, { useState, useEffect, useRef } from "react";
import VoiceSelector from "./VoiceSelector";
import TextAreaWithUpload from "./TextAreaWithUpload";
import ActionButton from "./ActionButton";
import "./styles.css";

const TextToSpeech = () => {
    const [text, setText] = useState("");
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(0);
    const speech = useRef(new SpeechSynthesisUtterance());

    useEffect(() => {
        const updateVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
            if (availableVoices.length > 0) {
                speech.current.voice = availableVoices[0];
            }
        };

        window.speechSynthesis.onvoiceschanged = updateVoices;
        updateVoices();

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const handleVoiceChange = (e) => {
        const voiceIndex = e.target.value;
        setSelectedVoice(voiceIndex);
        if (voices[voiceIndex]) {
            speech.current.voice = voices[voiceIndex];
        }
    };

    const handleSpeak = () => {
        if (!text) return;
        speech.current.text = text;
        window.speechSynthesis.speak(speech.current);
    };

    const handleDownload = () => {
        if (!text) return;
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "texto.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setText(event.target.result);
            };
            reader.readAsText(file);
        }
    };

    if (!window.speechSynthesis) {
        return (
            <div className="error">
                Seu navegador não suporta síntese de voz.
            </div>
        );
    }

    return (
        <div className="container">
            <h1>
                Conversor de <span>Texto</span> para <span>Fala</span>
            </h1>
            <p>Digite um texto ou envie algum arquivo para ser lido:</p>

            <TextAreaWithUpload
                text={text}
                onTextChange={setText}
                onFileUpload={handleFileUpload}
            />

            <div className="acoes">
                <VoiceSelector
                    voices={voices}
                    selectedVoice={selectedVoice}
                    onVoiceChange={handleVoiceChange}
                />

                <ActionButton
                    id="ouvir-btn"
                    label="Ouvir"
                    description="Clique para ouvir:"
                    onClick={handleSpeak}
                />

                <ActionButton
                    id="baixar-texto-btn"
                    label="Baixar Texto"
                    description="Obtenha um arquivo do conteúdo:"
                    onClick={handleDownload}
                />
            </div>
        </div>
    );
};

export default TextToSpeech;
