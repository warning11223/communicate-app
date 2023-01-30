import React from 'react';

type MessageProps = {
    name: string
}

const Message: React.FC<MessageProps> = ({name}) => {
    return (
        <div>{name}</div>
    );
};

export default Message;
