// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Map } from 'immutable';
import InputBar from './components/input_bar';
import Note from './components/note';
import * as db from './services/datastore';

// let noteId = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Map(),
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    db.fetchNotes((data) => {
      this.setState({ notes: Map(data) });
    });
  }

  onSubmit = (title) => {
    const note = {
      title,
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };

    db.createNote(note);
    // this.setState((prevState) => ({
    //   notes:
    //   prevState.notes.set(noteId, note),
    // }));
    // noteId += 1;
  }

  onUpdateNote =(id, newNote) => {
    const note = {
      title: this.state.notes.get(id).title,
      text: newNote,
      x: this.state.notes.get(id).x,
      y: this.state.notes.get(id).y,
      z: this.state.notes.get(id).zIndex,
    };

    db.updateNote(id, note);
  }

  onUpdateTitle =(id, newNote) => {
    const note = {
      title: newNote,
      text: this.state.notes.get(id).text,
      x: this.state.notes.get(id).x,
      y: this.state.notes.get(id).y,
      z: this.state.notes.get(id).zIndex,
    };

    db.updateNote(id, note);
  }

  onUpdateDrag = (id, newNote) => {
    const note = {
      title: this.state.notes.get(id).title,
      text: this.state.notes.get(id).text,
      x: newNote.x,
      y: newNote.y,
      z: this.state.notes.get(id).zIndex,
    };

    db.updateNote(id, note);
  }

  onDelete = (id) => {
    db.deleteNote(id);
    // this.setState((prevState) => ({
    //   notes: prevState.notes.delete(id),
    // }));
  }

  renderNotes = (notes) => {
    return notes.entrySeq().map(([id, note]) => (
      <Note id={id} key={id} note={note} updateMap={this.onUpdateDrag} updateText={this.onUpdateNote} updateTitle={this.onUpdateTitle} onDelete={this.onDelete} />
    ));
  }

  render() {
    return (
      <div>
        <InputBar onSubmit={this.onSubmit} />
        {this.renderNotes(this.state.notes)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
