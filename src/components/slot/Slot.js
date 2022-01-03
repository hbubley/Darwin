import React from 'react'

const Slot = ({ value }) => {
    return (
        <div>
            <h1>{value[value.type]}</h1>
        </div>
    )
}

export default Slot
