import React from 'react'

export default function Note(props) {
    return (
        <div className="col-sm-3">
            <div className="card border-warning mb-3 mx-auto" style={{ maxWidth: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                    <button className='btn float-end' onClick={() => props.deleteNote(props.index)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}
