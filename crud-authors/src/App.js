import React, { useEffect, useState } from 'react';
import { fetchAuthors, deleteAuthor, createAuthor } from './api';
import AuthorTable from './components/AuthorTable';
import AuthorForm from './components/AuthorForm';

const App = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const loadAuthors = async () => {
      const data = await fetchAuthors();
      setAuthors(data);
    };
    loadAuthors();
  }, []);

  const handleDelete = async (id) => {
    await deleteAuthor(id);
    setAuthors(authors.filter(author => author.id !== id));
  };

  const handleCreate = async (author) => {
    const newAuthor = await createAuthor(author);
    setAuthors([...authors, newAuthor]);
  };

  return (
      <div>
        <h1>Authors</h1>
        <AuthorTable authors={authors} onDelete={handleDelete} />
        <AuthorForm onCreate={handleCreate} />
      </div>
  );
};

export default App;
