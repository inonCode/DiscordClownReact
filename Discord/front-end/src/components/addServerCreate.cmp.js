import React, { Fragment } from 'react'

export default function AddServerCreate(props) {

    const { imgUrl, uploadImgIcon, uploadServerImg,updateServerName } = props

    return (
        <Fragment>
            <h2 className='primary-header'>
                Customize your server
        </h2>
            <p className='header-p'>
                Give your new server a personality with a name and an icon.
                You can always change it later
        </p>
            <input type='file' id='file-input' onChange={uploadServerImg} />
            <label htmlFor='file-input'>{imgUrl ? <div className='img-preview'>
                <div className='img-container'>
                    <img src={imgUrl} alt='alt' />
                </div>
            </div> : uploadImgIcon}</label>

            <h3 className='text-input-title'>server name</h3>
            <input className='server-name-input' type='text' placeholder='Name your server' onChange={updateServerName} />
        </Fragment>
    )
}
