import React, { Component } from 'react'

class NotesList extends Component {
  render() {
    const {note} = this.props;
    return (
      <div className="row">
        <div className="col l12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{note.title}</span>
              <p>{note.body}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn push grey darken-1"><i className="material-icons left">access_time</i>{note.date}</a>
              <a className="waves-effect waves-light btn grey darken-1"><i className="material-icons left">account_circle</i>{note.author}</a>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default NotesList;
