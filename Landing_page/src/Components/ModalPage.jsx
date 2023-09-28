import { useState } from "react"
import Modal from "./UI/Modal"

function ModalPage() {
    const [open, setOpen] = useState(false)

    function handleOpen () {
        setOpen((open) => !open)
    }


    return (
        <div>
            {open && <Modal/>}
            <button onClick={handleOpen}>Open Modal</button>
        </div>
    )
}

export default ModalPage
