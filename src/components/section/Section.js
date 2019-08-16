import React from 'react';
import './Section.css';

export default function Section(props) {
    return (
        <section
            id={props.id}
            style={{ backgroundColor: props.backgroundColor }}>
            <h1>{props.title}</h1>
        </section>
    );
}