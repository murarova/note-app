import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../NoteItem/NoteItem';
import styles from '../styles.module.css';

const NoteList = ({ notes, onDelete }) => (
    <ul className={styles.noteList}>
        {notes.map(note => {
            const { text, id, color } = note;
            return (
                <NoteItem
                    key={id}
                    text={text}
                    id={id}
                    color={color}
                    onDelete={() => onDelete(id)}
                />
            );
        })}
    </ul>
);

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteList;
