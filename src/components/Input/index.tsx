/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react';

import './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
    <div className="input-block">
        <label htmlFor={name}>
            { label }
            <input id={name} type="text" {...rest} />
        </label>
    </div>
);

export default Input;
