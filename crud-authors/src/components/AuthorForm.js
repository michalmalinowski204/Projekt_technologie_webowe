import React, { useState } from 'react';

const AuthorForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, surname });
        setName('');
        setSurname('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <button type="submit">Add Author</button>
        </form>
    );
};

export default AuthorForm;
