import { useState } from "react";
import Banner from "../components/banner/Banner";
import CommunicationSelector from "../components/communicationSelector/CommunicationSelector";
import PromptBuilder from "../components/promptBuilder/PromptBuilder";
import PromptPreview from "../components/promptPreview/PromptPreview";
import Template from "../components/template/Template";
import promptTemplates from '../utils/promptTemplates';

import "./Home.css";

interface PromptParams {
    objective: string;
    sender: string;
    receiver: string;
    tone: string;
    detailLevel: number;
    context: string;
    language: string;
    style: string;
}

export const Home = () => {
    const [communicationType, setCommunicationType] = useState<string>('');
    const [promptParams, setPromptParams] = useState<PromptParams>({
        objective: '',
        sender: '',
        receiver: '',
        tone: '',
        detailLevel: 1,
        context: '',
        language: 'italiano',
        style: 'standard'
    });
    const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

    const handleCommunicationSelect = (type: string) => {
        setCommunicationType(type);
        generatePrompt(type, promptParams);
    };

    const handleParametersChange = (params: PromptParams) => {
        setPromptParams(params);
        generatePrompt(communicationType, params);
    };

    const generatePrompt = (type: string, params: PromptParams) => {
        if (!type || !promptTemplates[type]) return;

        const template = promptTemplates[type];
        let prompt = template.base;

        // Replace placeholders with actual values
        const replacements: Record<string, string> = {
            '{sender}': params.sender,
            '{receiver}': params.receiver,
            '{tone}': params.tone,
            '{style}': params.style,
            '{objective}': params.objective,
            '{context}': params.context,
            '{language}': params.language,
            '{detailLevel}': params.detailLevel === 0 ? 'sintetico' : 
                           params.detailLevel === 1 ? 'standard' : 
                           'approfondito'
        };

        Object.entries(replacements).forEach(([key, value]) => {
            prompt = prompt.replace(key, value);
        });

        setGeneratedPrompt(prompt);
    };

    const handleRegeneratePrompt = () => {
        generatePrompt(communicationType, promptParams);
    };

    const handleSaveTemplate = () => {
        const template = {
            type: communicationType,
            params: promptParams
        };
        localStorage.setItem('savedTemplate', JSON.stringify(template));
    };

    return (
        <Template>
            <Banner/>
            <CommunicationSelector onSelect={handleCommunicationSelect}/>
            <PromptBuilder 
                parameters={promptParams}
                onParametersChange={handleParametersChange}
            />
            <PromptPreview 
                prompt={generatedPrompt || "Seleziona un tipo di comunicazione e compila i parametri per generare il prompt"}
                onRegenerate={handleRegeneratePrompt}
                onSaveTemplate={handleSaveTemplate}
            />
        </Template>
    );
};
