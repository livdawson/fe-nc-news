import { useState } from "react";

export default function Expandable ({children, showButton}) {

const [isOpen, setIsOpen] = useState(false)

const toggleOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
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