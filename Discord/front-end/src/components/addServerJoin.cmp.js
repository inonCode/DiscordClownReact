import React, { Fragment } from 'react'

export default function AddServerJoin() {

    return (

        <Fragment>
            <h2 className='primary-header'>
                Join a server
        </h2>
            <p className='header-p'>
                Enter an invite below to join an existing server
        </p>
            <h3 className='text-input-title'>invite link</h3>
            <input className='invite-link-input' type='text' placeholder=' '></input>
            <div class='examples'>
                <h5 >Invites should look like</h5>
                <div >hTKzmak</div>
                <div >https://discord.gg/hTKzmak</div>
                <div >https://discord.gg/cool-people</div>
            </div>
        </Fragment>
    )
}