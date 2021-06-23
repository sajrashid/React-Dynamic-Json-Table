import { useEffect } from "react"

export default function useLogger(name,value) {
    useEffect(() => {
       console.log(name + ":" + value)
    }, [name,value])
   
}