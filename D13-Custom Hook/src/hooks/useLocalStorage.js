import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {

    
    const [value, setValue] = useState(() => {
        let storage = localStorage.getItem(key);
        return storage ? storage : initialValue;
    });

    useEffect(() =>{
        localStorage.setItem(key, value);
    },[value])

    return {value, setValue};

}

export default useLocalStorage; 