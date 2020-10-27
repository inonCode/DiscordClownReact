import React, { Fragment } from 'react'

export default function AddServerDef(props) {

    const { changeModalView } = props
    return (
        <Fragment>
            <button onClick={() => changeModalView('createServer')} className='modal-opt-btn'>
                <h2>
                    Create a new server
            </h2>
            </button>
            <button onClick={() => changeModalView('joinServer')} className='modal-opt-btn'>

                <h2>
                    Join an existing server
            </h2>
            </button>
        </Fragment>
    )
}