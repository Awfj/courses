import { useState } from 'react';

export default function App() {
    const text =
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Numquam, porro inventore enim minima exercitationem doloremque. 
    Pariatur doloremque reiciendis at itaque accusantium.`

    return (
        <TextComponent text={text} />
    )
}

function TextComponent({ text }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function getFirstSentence(text) {
        return text.split('.')[0] + ".";
    }

    function toggleText() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <p>
                {isExpanded ? text : getFirstSentence(text)}
            </p>

            <button onClick={toggleText}>
                {isExpanded ? "Скрыть подробности" : "Показать подробнее"}
            </button>
        </>
    )
}
