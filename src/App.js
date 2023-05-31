import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [note, setNote] = useState({
    title: "",
    body: ""
  })

  const userInput = (event) => {
    let { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value }
    });
  }

  const [arrNote, setArrNote] = useState([]);
  const addNote = (event) => {
    event.preventDefault();
    console.log(note);
    if (note.title === "" || note.body === "") {
      alert("Cannot save empty note");
    }
    else {
      setArrNote((prevData) => {
        return [note, ...prevData]
      })
      setNote({
        title: "",
        body: ""
      })
    }
  }

  const deleteNote = (selectedIndex) => {
    setArrNote(arrNote.filter((item, index) => {
      return selectedIndex !== index;
    }))
  }

  return (
    <>
      <Navbar />
      <CreateNote title={note.title} body={note.body} userInput={userInput} addNote={addNote} />
      <div className="container">
        <div className="row">
          {arrNote.map((item, index) => {
            return <Note title={item.title} body={item.body} key={index} deleteNote={deleteNote} index={index} />
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
