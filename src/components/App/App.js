import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import NoteEditor from '../NoteEditor/NoteEditor';
import LOCALSTORAGE from '../../services/localStorage';
import NoteList from '../NoteList/NoteList';
import styles from '../styles.module.css';

class App extends Component {
    state = {
        notes: [],
    };

    componentDidMount() {
        const fromLS = LOCALSTORAGE.get('notes') || [];
        this.setState({ notes: fromLS });
    }

    componentDidUpdate() {
        const { notes } = this.state;
        LOCALSTORAGE.set(notes);
    }

    onSubmit = (text, color) => {
        const noteToAdd = {
            text,
            color,
            id: shortid.generate(),
        };
        this.setState(state => ({ notes: [noteToAdd, ...state.notes] }));
    };

    onDelete = id =>
        this.setState(state => ({
            notes: state.notes.filter(note => note.id !== id),
        }));

    render() {
        const { notes } = this.state;
        return (
            <Fragment>
                <h2 className={styles.title}>NotesApp</h2>
                <div className={styles.container}>
                    <NoteEditor onSubmit={this.onSubmit} />
                    {notes.length > 0 && (
                        <NoteList notes={notes} onDelete={this.onDelete} />
                    )}
                </div>
            </Fragment>
        );
    }
}

export default App;
