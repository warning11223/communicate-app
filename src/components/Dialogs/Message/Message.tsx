import React from 'react';

type MessageProps = {
    name: string
}

export const Message: React.FC<MessageProps> = ({name}) => {
    return (
        <div>{name}</div>
    );
};

