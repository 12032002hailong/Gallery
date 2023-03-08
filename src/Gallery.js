import React, { useState } from 'react';
import './galerry.css'
import { AiOutlineClose } from "react-icons/ai";

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';

const Gallery = () => {
    const data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>

            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <AiOutlineClose onClick={() => setModel(false)} />

            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics'
                            key={index}
                            onClick={() => getImg(item.imgSrc)}

                        >
                            {/* <span>id={item.id}</span> */}
                            <img src={item.imgSrc} alt="" style={{ width: '100%' }} />

                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Gallery