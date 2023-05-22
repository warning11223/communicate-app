import React, {useState} from 'react';

import s from './ProfileStatus.module.css'

export const ProfileStatus: React.FC<PropsType> = ({status, changeStatus}) => {
    const [editable, setEditable] = useState(false);
    const [value, setValue] = useState(status);

    const onBlurHandler = () => {
        setEditable(false);
        changeStatus(value);
    }

    return (
        <div>
            {
                !editable
                    ? <span
                        className={s.status}
                        onClick={() => setEditable(true)}
                    >Status: {status || 'No status 😢'}</span>
                    : <input
                        className={s.input}
                        type="text"
                        value={value}
                        onBlur={onBlurHandler}
                        onChange={(e) => setValue(e.currentTarget.value)}
                        autoFocus
                    />
            }
        </div>
    );
};

type PropsType = {
    status: string
    changeStatus: (statusValue: string) => void
}

