import { useState } from "react";

const useVisiblePassword = () => {

    const [inputType, setInputType] = useState("password");

        // funcion que cambia el type del input
        const togglePasswordVisible = () => {
        setInputType((toogleType) => (toogleType === 'password' ? 'text' : 'password'));
    }

    return { inputType, togglePasswordVisible }
}

export default useVisiblePassword