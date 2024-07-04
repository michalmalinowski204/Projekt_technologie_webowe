import React, { useState } from 'react';

const AuthorEditForm = ({ author, onUpdate, onCancel }) => {
    const [name, setName] = useState(author.name);
    const [surname, setSurname] = useState(author.surname);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(author.id, { name, surname });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default AuthorEditForm;
