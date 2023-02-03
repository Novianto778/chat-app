import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    sizes: 'small' | 'medium' | 'large';
}

const Input = (props: Props) => {
    let baseClass = 'border-none text-white rounded px-4 py-2';
    const { sizes = 'medium', ...rest } = props;

    if (sizes === 'small') {
        baseClass += ' bg-blue-500 hover:bg-blue-600';
    }

    if (sizes === 'medium') {
        baseClass += ' bg-gray-500 hover:bg-gray-600';
    }

    if (sizes === 'large') {
        baseClass += ' bg-red-500 hover:bg-red-600 text-xl';
    }

    return <input className={baseClass} {...rest} />;
};

export default Input;
