import React from 'react'
import useLocalStorage
 from '../hooks/useLocalStorage'
export default function Table() {

    const [name, setName]= useLocalStorage('name', ()=>'')

    return (
        <>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />

        </>
    )
}
