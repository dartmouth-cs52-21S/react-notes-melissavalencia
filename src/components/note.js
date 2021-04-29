import React, { Component } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleUpdateTitle = (event) => {
    this.props.updateTitle(this.props.id, event.target.value);
  }

  handleUpdateText = (event) => {
    this.props.updateText(this.props.id, event.target.value);
  }

  handleDragClick = (e, data) => {
    this.props.updateMap(this.props.id, data);
  }

  handleDeleteClick = () => {
    this.props.onDelete(this.props.id);
  }

  onEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  }

  renderMap = () => {
    if (this.state.isEditing) {
      return (
        <div>
          <TextareaAutosize default="" id="edit-text" type="text" onChange={this.handleUpdateTitle} value={this.props.note.title} />
          <TextareaAutosize default="" id="edit-text" type="text" onChange={this.handleUpdateText} value={this.props.note.text} />
        </div>
      );
    } else {
      console.log(this.props.note.text);
      // const notetext = `${this.props.note.text}`;
      return (
        <div>
          <h1 className="title">{this.props.note.title}</h1>
          {/* <div> {this.props.note.text} </div> */}
          <ReactMarkdown id="normal-text">{this.props.note.text || ''}</ReactMarkdown>
        </div>
      );
    }
  }

  render() {
    return (
      <Draggable
        handle=".handle"
        position={{
          x: this.props.note.x, y: this.props.note.y,
        }}
        // onStart={this.handleStartDrag}
        onDrag={this.handleDragClick}
        // onStop={this.handleStopDrag}
      >
        <div className="note">
          <div className="top-icons">
            <div className="icon handle" id="drag" alt="drag-icon" />
          </div>
          <div className="note-text">
            <div className="text">{this.renderMap()}</div>
          </div>
          <div className="bottom-icons">
            <div className="icon" id="delete" alt="delete-icon" role="button" tabIndex={0} onClick={this.handleDeleteClick} />
            {this.state.isEditing ? (<div className="icon" id="confirm" alt="edit-icon" role="button" tabIndex={0} onClick={this.onEdit} />)
              : (<div className="icon" id="edit" alt="edit-icon" role="button" tabIndex={0} onClick={this.onEdit} />
              )}
          </div>
        </div>
      </Draggable>

    );
  }
}

export default Note;
