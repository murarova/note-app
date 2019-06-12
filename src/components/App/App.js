import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteList from '../NoteList/NoteList';
import styles from '../styles.module.css';

class App extends Component {
    state = {
        notes: [],
    };

    onSubmit = (text, color) => {
        const noteToAdd = {
            text,
            color,
            id: shortid.generate(),
        };

        this.setState(state => ({ notes: [...state.notes, noteToAdd] }));
    };

    render() {
        const { notes } = this.state;
        return (
            <Fragment>
                <h2 className={styles.title}>NotesApp</h2>
                <div className={styles.container}>
                    <NoteEditor onSubmit={this.onSubmit} />
                    {notes.length > 0 && <NoteList notes={notes} />}
                </div>
            </Fragment>
        );
    }
}

export default App;
