import { useEffect, useState } from "react"

import useLogger from "./useLogger"

function getSavedValue(key, initialValue) {
    
    const savedValue = JSON.parse(sessionStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}


export default function useSessionStorageStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [value])// eslint-disable-line react-hooks/exhaustive-deps
    useLogger("Saving LS " + key + " ", value)

    return [value, setValue]
}
