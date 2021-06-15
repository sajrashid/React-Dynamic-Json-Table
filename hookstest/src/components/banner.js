import React, { useState, useEffect } from "react";
import './banner.css'

const banner = props => {
    return (

        <div className="bg-gray-900 banner">
            <div className="largetext display-4 text-7xl">
                <h1 className="text-yellow-600">SuperTable</h1>
                <h3 className="font-mono text-lg text-yellow-200"> Dynamic Json Table </h3>
                <div className="font-mono bg-black rounded-md shadow-lg code">
                    <div className='relative pt-1 text-sm text-left text-green-200 bg-gray-800 -top-6'>
                       <span className="p-2">Usage</span> 
                        <h2 className="relative p-2 text-xl text-white bg-gray-600"><span>&#60;</span><span className="text-green-600">SuperTable</span> 
                        <span className="text-blue-400"> json</span>=<span className="text-yellow-400">&#123;</span><span className="text-indigo-200">json</span>
                         <span className="text-yellow-400">&#125;</span><span>&#47;</span><span>&#62;</span></h2>
                    
                    </div>
                    <div className="p-4 text-xl text-left bg-blue-900 text-gray-50">
                        <ul className="list-disc docmenu text-light-50" >
                            <li><span>Creates a standard HTML table</span></li>
                            <li><span>Pass any CSS classes as props  </span></li>
                            <li><span>Does not require an Id Column</span></li>
                            <li><span>Infers by type bools, dates...</span></li>
                            <li><span>Sortable by default (optional)</span></li>
                            <li><span>Optional search filters</span></li>
                            <li><span>Custom mark-up columns</span></li>
                            <li><span>See the examples for more...</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default banner