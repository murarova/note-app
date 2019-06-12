/* eslint-disable */

import React from 'react';
import styles from '../styles.module.css';

const NoteItem = ({ text, id, color }) => (
    <li key={id} className={styles.noteItem}>
        <p>{text}</p>
    </li>
);

export default NoteItem;
