import React, { FC } from 'react'
import { ImageCardType } from '../../Utils/interface'

const ImageCard: FC<ImageCardType> = ({ header, image }) => {
    return (
        <div className='image-card-container'>
            <header>{header}</header>
            <div className="img" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}

export default ImageCard