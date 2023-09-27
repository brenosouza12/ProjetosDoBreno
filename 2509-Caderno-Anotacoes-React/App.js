import React, { useState } from 'react';
import NoteList from './src/noteList';
import NoteForm from './src/noteForm';
import './App.css';

function App (){

  const [notes,setNotes] = useState([])

  //adicionar uma nova nota

  const addNote = (note) => {

    setNotes([...notes,note]);

  };

  //excluir uma nota

  const deleteNote = (index) => {

    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes)

  };

  return (

    <div className = "App">

      <h1>Meu caderno de anotações</h1>
      <NoteForm addNote = {addNote}/>
      <NoteList notes = {notes} deleteNote = {deleteNote}/>

    </div>

  )

}

export default App;