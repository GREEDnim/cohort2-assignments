import React, { useState, useCallback,useRef } from 'react';
import { useEffect } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);

    let count=useRef(0);
    const handleReRender = () => {
        forceRender(Math.random());
    };
    // use effect runs only after component renders :) , so 
    useEffect(()=>{
        count.current=count.current+1;
    })
    return (
        <div>
            <p>This component has rendered {count.current} times.</p>
            <button onClick={handleReRender}>Force Re-render {count.current}</button>
        </div>
    );
};