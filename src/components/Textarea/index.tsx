/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { TextareaHTMLAttributes } from 'react';

import './index.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    label: string,
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => (
    <div className="textarea-block">
        <label htmlFor={name}>
            { label }
            <textarea id={name} {...rest} />
        </label>
    </div>
);

export default Textarea;
