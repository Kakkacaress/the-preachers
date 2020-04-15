import React from 'react'

export const SearchBox = ({ placeholder, handleChange }) => (
    <div>
        <input
            onChange={handleChange}
            type="text"
            placeholder={placeholder}
            style={{
                height: '5vh',
                width: '20%',
                borderRadius: '10px',
                textIndent: '15px'
            }} />
    </div>
)
