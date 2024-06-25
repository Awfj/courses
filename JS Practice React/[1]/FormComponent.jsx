import { useRef } from 'react'

export default function FormComponent() {
    const inputRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} />
            <button type='submit'>Submit</button>
        </form>
    )
}