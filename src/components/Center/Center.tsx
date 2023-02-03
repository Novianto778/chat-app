import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Center = ({ children }: Props) => {
    return <div className="flex justify-center">{children}</div>;
};

export default Center;
