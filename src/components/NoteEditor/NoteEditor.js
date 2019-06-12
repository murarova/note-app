/* eslint-disable */
import React, { Component } from 'react';
// import classNames from 'classnames';
import styles from '../styles.module.css';
import markers from '../markers.json';

class NoteEditor extends Component {
    state = {
        value: '',
        color: '',
    };

    onChange = e => this.setState({ value: e.target.value });

    onClick = e => this.setState({ color: e.target.id });

    onSubmit = e => {
        const { value, color } = this.state;
        e.preventDefault();
        this.props.onSubmit(value, color);
        this.setState({ value: '', color: '' });
    };

    render() {
        const { value } = this.state;

        return (
            <form className={styles.form} onSubmit={this.onSubmit}>
                <textarea
                    className={styles.noteEditor}
                    value={value}
                    onChange={this.onChange}
                ></textarea>
                <div className={styles.notesMarker}>
                    {markers.map(marker => {
                        return (
                            <button
                                onClick={this.onClick}
                                type="button"
                                id={marker}
                                key={marker}
                                className={styles.marker}
                            ></button>
                        );
                    })}
                </div>
                <button className={styles.button} type="submit">
                    ADD
                </button>
            </form>
        );
    }
}

export default NoteEditor;
