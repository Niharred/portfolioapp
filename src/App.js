

import { useState } from 'react';
import NotesList from './components/NotesList.js'
import {nanoid} from 'nanoid'
import Todoform from './components/todo/todo.js';

const App=() =>{
  const [notes,setNotes] = useState([
    {id:nanoid(),
    text: 'This is my first Note',
    date: '15/04/2021'
    }
    ,{
      id:nanoid(),
    text: 'This is my second Note',
    date: '10/04/2020'
    },{
      id:nanoid(),
    text: 'This is my third Note',
    date: '08/04/2022'
    }]);
  return(<div className=''><NotesList notes={notes}/>
  <Todoform></Todoform>
  </div>)
};

export default App;