const API_URL = 'http://localhost:8000';

export const fetchAuthors = async () => {
    const response = await fetch(`${API_URL}/authors`);
    const data = await response.json();
    return data;
};
export const createAuthor = async (author) => {
    const response = await fetch(`${API_URL}/authors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(author),
    });
    const data = await response.json();
    return data;
};
export const updateAuthor = async (id, author) => {
    const response = await fetch(`${API_URL}/authors/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(author),
    });
    const data = await response.json();
    return data;
};

export const deleteAuthor = async (id) => {
    await fetch(`${API_URL}/authors/${id}`, {
        method: 'DELETE',
    });
};
