import React, { Component } from 'react';

class NotesForm extends Component {
    state = {
        note: {
            title: '',
            body: '',
            date: '',
            author: ''
        }
    }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state.note);
  }

  onInputChange = (evt) => {
    const newNote = this.state.note;
    newNote[evt.target.name] = evt.target.value;
    this.setState({
        note: newNote
    })
  }
    
  render() {
      const {note} = this.state;
    return (
        <div className="row">
            <form className="col s12" onSubmit={this.onFormSubmit}>
                <div className="input-field">
                    <input name="title" onChange={this.onInputChange} value={note.title} id="note_title" type="text" className="validate" />
                    <label for="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <input name="body" onChange={this.onInputChange} value={note.body} id="note_body" type="text" className="validate" />
                    <label for="note_body">Note Body</label>
                </div>
                <div className="col s4">
                    <div className="input-field">
                        <input name="date" onChange={this.onInputChange} value={note.date} id="note_date" type="date" className="validate" />
                        <label for="note_date">Note Date</label>
                    </div>
                </div>
                <div className="col s4">
                    <div className="input-field">
                        <input name="author" onChange={this.onInputChange} value={note.author} id="note_author" type="text" className="validate" />
                        <label for="note_author">Created By</label>
                    </div>
                </div>
                <div className="col s4">
                    <button className="waves-effect waves-light btn orange darken-3 radius">Add Note</button>
                </div>
            </form>
        </div>
    )
  }
}

export default NotesForm; 
