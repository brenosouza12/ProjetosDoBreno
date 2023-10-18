import React from "react";

function noteList({notes,deleteNote}){

    return(

       <ul>

          {notes.map((note, index) =>(

            <li key = {index}>

                {note}
                <button onClick = {() => deleteNote(index)}>Excluir</button>

            </li>

          ))}

       </ul>
    )

}

export default noteList;