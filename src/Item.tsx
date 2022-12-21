import { useState } from 'react';

type ItemProps = {
    id: number;
    name: string;
};

export const Item = (props: ItemProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [defName, setDefName] = useState(props.name);
    const [newName, setNewName] = useState(props.name);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setDefName(newName);
            setIsEdit(false);
        } else if (e.key === 'Escape') setIsEdit(false);
    };

    if (!isEdit) return <div onClick={() => setIsEdit(true)}>{defName}</div>;
    else
        return (
            <input
                type="text"
                defaultValue={defName}
                onKeyDown={handleKeyDown}
                onChange={(e) => setNewName(e.target.value)}
            />
        );
};
