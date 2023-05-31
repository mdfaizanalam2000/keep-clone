export default function CreateNote(props) {
    return (
        <div className='main'>
            <form>
                <input type="text" name='title' value={props.title} placeholder='Write a note...' onChange={props.userInput} />
                <textarea placeholder='Type what your are thinking...' name='body' value={props.body} cols="50" rows="5" onChange={props.userInput}></textarea>
                <button onClick={props.addNote}>+</button>
            </form>
        </div>
    )
}
