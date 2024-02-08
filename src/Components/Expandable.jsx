import { useState } from "react";

export default function Expandable ({children, showButton, onToggle}) {

const [isOpen, setIsOpen] = useState(false)

const toggleOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
    onToggle()
}

return (
    <div>
        <button onClick={toggleOpen}>
            {isOpen ? "Hide" : showButton} 
        </button>
        {isOpen ? children : null }
    </div>
)
}