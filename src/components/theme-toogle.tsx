import React, { useEffect, useState } from 'react'
import './theme-toogle.css';

const ToggleTheme = () => {
    
    return (
        <div>
            <label className="toggle_label">
                <input type="checkbox" id="mode" className="toggle" />
                <span className="slider round">
                    <i className="fa-solid fa-moon fa-lg fa-spin moon"></i>
                    <i className="fa-solid fa-sun fa-spin fa-lg sun"></i>
                </span>
            </label>
        </div>
    )
}

export default ToggleTheme
