/* eslint-disable */

import React from 'react';
import styles from '../styles.module.css';

const NoteItem = ({ text, id, color, onDelete }) => (
    <li
        key={id}
        className={styles.noteItem}
        style={{
            backgroundColor: color || '#fff',
        }}
    >
        <p className={styles.text}>{text}</p>
        <button type="button" className={styles.delButton} onClick={onDelete}>
            Del
        </button>
    </li>
);

export default NoteItem;
