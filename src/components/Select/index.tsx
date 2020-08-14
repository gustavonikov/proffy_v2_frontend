/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { SelectHTMLAttributes } from 'react';

import './index.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string,
    label: string,
    options: Array<{
        value: string,
        label: string,
    }>,
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => (
    <div className="select-block">
        <label htmlFor={name}>
            { label }
            <select value="" id={name} {...rest}>
                <option value="" hidden disabled>Selecione uma opção</option>

                { options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default Select;
