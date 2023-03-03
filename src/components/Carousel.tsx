import React from 'react'
import { useSelector } from 'react-redux'
import "../css/Carousel.css"
import { AddBackground } from '../redux/Actions/Actions'
import { useAppDispatch } from '../redux/app.hooks'
import { RootState } from '../redux/Store'



const Carousel = () => {
    const dispatch = useAppDispatch()
    const image = useSelector((store: RootState) => store.UserManager.background_image)
    console.log(image)


    const carousel = (e: any) => {
        dispatch(AddBackground(e.target.src))
        console.log(image)
    }


    return (
        <div>

            <div className="carousel">
                <div className="carousel-num"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i></div>
                <div className="carousel-stage" id="carousel">
                    <div className="carousel-item" >
                        <div onClick={(e) => carousel(e)} className="carousel-content"><img className="carousel-image" src="https://cdn2.thecatapi.com/images/2k6.jpg" alt="cat" /></div>
                    </div>
                    <div className="carousel-item">
                        <div onClick={(e) => carousel(e)} className="carousel-content"><img className="carousel-image" src="https://cdn2.thecatapi.com/images/ck2.jpg" alt="cat" /></div>
                    </div>
                    <div className="carousel-item">
                        <div onClick={(e) => carousel(e)} className="carousel-content"><img className="carousel-image" src="https://cdn2.thecatapi.com/images/ckc.jpg" alt="cat" /></div>
                    </div>
                    <div className="carousel-item">
                        <div onClick={(e) => carousel(e)} className="carousel-content"><img className="carousel-image" src="https://cdn2.thecatapi.com/images/779.jpg" alt="cat" /></div>
                    </div>
                    <div className="carousel-item">
                        <div onClick={(e) => carousel(e)} className="carousel-content"><img className="carousel-image" src="https://cdn2.thecatapi.com/images/dp8.jpg" alt="cat" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Carousel
