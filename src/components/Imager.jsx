import React, { useState } from 'react'
import Display from './Display'
import Thumbnail from './Thumbnail'

function Imager() {

    const imageArray = [
        "images/imager1.jpg", "images/imager2.jpg", "images/imager3.png",  "images/imager4.jpg",
        "images/imager5.jpg", "images/imager6.jpg", "images/imager7.png",   "images/imager8.jpg",
        "images/imager9.jpg", "images/imager10.png", "images/imager11.jpg",   "images/imager12.jpg"
    ]
    const [currentImage, setCurrentImage] = useState(0)

    const randomImage = () => {
        let randomIndex = Math.floor(Math.random() * 12)
        setCurrentImage(randomIndex)
    }

    const leftImg = () => {
        setCurrentImage((img) => (
            img === 0 ? imageArray.length - 1 : img - 1
        ))
    }

    const rightImg = () => {
        setCurrentImage((img) => (
            img === imageArray.length - 1 ? 0 : img + 1
        ))
    }

    const displayHandler = (index) => {
        setCurrentImage(index)
    }

    return (
        <div className='body'>
            <div id='main'>
                <div id="header"></div>
                <Display src={imageArray[currentImage]} />
                <div id='toolBar'>
                    <button id="random " onClick={() => randomImage()}>¯\_(ツ)_/¯Random🤷🏼</button>
                    <div id="buttons">
                        <button onClick={leftImg}>↫Back</button>
                        <button onClick={rightImg}>↬Next</button>
                    </div>
                </div>
                <div className='thumbnails'>
                    { 
                        imageArray.map((path, i)=>{
                            return(
                                // <Thumbnail images={imageArray} currentImage={currentImage} onSelect={displayHandler}/>
                                <Thumbnail key={i} index={i} src={path} displayHandler={displayHandler}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Imager