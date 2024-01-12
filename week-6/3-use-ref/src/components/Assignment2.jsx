import React, { useState, useCallback,useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);

    let count=useRef(1);
    const handleReRender = () => {
        // Update state to force re-render
        count.current=count.current+1;
        forceRender(Math.random());
    };

    return (
        <div>
            <p>This component has rendered {count.current} times.</p>
            <button onClick={handleReRender}>Force Re-render {count.current}</button>
        </div>
    );
};