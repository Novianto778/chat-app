import Button from '../Button/Button';
import React from 'react';
import Input from '../Input/Input';

type Props = {};

const Subscription = (props: Props) => {
    return (
        <div>
            <Input sizes="large" />
            <Button variant="primary">Subscribe</Button>
        </div>
    );
};

export default Subscription;
