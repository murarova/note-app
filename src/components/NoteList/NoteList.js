/* eslint-disable */

import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import styles from '../styles.module.css';

const NoteList = ({ notes }) => (
    <ul className={styles.noteList}>
        {notes.map(note => {
            const { text, id, color } = note;
            return <NoteItem key={id} text={text} id={id} color={color} />;
        })}
    </ul>
);

export default NoteList;
