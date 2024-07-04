import React, { useState } from 'react';
import AuthorEditForm from './AuthorEditForm';

const AuthorTable = ({ authors, onDelete, onUpdate }) => {
    const [editingAuthor, setEditingAuthor] = useState(null);

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {authors.map((author) => (
                <tr key={author.id}>
                    <td>
                        {editingAuthor === author.id ? (
                            <AuthorEditForm
                                author={author}
                                onUpdate={onUpdate}
                                onCancel={() => setEditingAuthor(null)}
                            />
                        ) : (
                            `${author.name} ${author.surname}`
                        )}
                    </td>
                    <td>
                        <button onClick={() => setEditingAuthor(author.id)}>Edit</button>
                        <button onClick={() => onDelete(author.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default AuthorTable;
