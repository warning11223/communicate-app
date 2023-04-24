import React from 'react';
import s from './FormControls.module.css';

export const required = (value: string) => (value || typeof value === 'number' ? undefined : 'Required');

export const maxLength = (max: number) => (value: string) => value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string) => value && value.length < min ? `Must be ${min} characters or more` : undefined;

const Element = (Element: string | React.FC): React.FC<RenderFieldPropsType> => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <Element
                {...input}
                {...props}
                className={`${Element === 'textarea' ? s.textarea : s.input} ${hasError ? s.error : ""}`}
            />
            <div>
                { hasError && <span style={{color: 'red', fontSize: '14px'}}> { meta.error } </span> }
            </div>
        </div>
    );
};

export const Textarea = Element('textarea');
export const Input = Element('input');

type RenderFieldPropsType = {
    input: string
    label: string
    type: string
    meta: {
        touched: boolean
        error: string
        warning: string
    }
}
