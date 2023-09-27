import React, { useState } from 'react';

function NoteForm({ addNote }) {

  const [note, setNote] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (note.trim() === '') return;
    addNote(note);
    setNote('');

  };

  return (

    <form onSubmit={handleSubmit}>

      <input

        type = "text"
        placeholder = "Digite sua anotação"
        value = {note}
        onChange = {(e) => setNote(e.target.value)}

      />

      <button type="submit">Adicionar</button>

    </form>

  );

}

export default NoteForm;
