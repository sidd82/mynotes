import React, { Component } from 'react';
import NotesForm from '../../notes/NotesForm/NotesForm';
import NotesList from '../../notes/NotesList/NotesList';
import cuid from 'cuid';

const notesDashboard = [
  {
    id: 1,
    title: 'This is my first note',
    body: 'This note was only created for a testing purpose',
    date: '6-28-2018',
    author: 'Ram'
  }
]

class NotesDashboard extends Component {
  state = {
    notes: notesDashboard,
    isOpen: false
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleCreateNote = newNote => {
    newNote.id = cuid();
    const updatedNotes = [...this.state.notes, newNote];
    this.setState({
      notes: updatedNotes,
      isOpen: false
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
            <button onClick={this.handleFormOpen} className="waves-effect waves-light btn orange darken-3">Create Notes</button>
            </div>
        </div>
        {this.state.isOpen && <NotesForm createEvent={this.handleCreateNote} />}
        {this.state.notes.map((note) => (
            <NotesList key={note.id} note={note}/>
        ))}
        </div>
      </div>
    )
  }
}

export default NotesDashboard;
