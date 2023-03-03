import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/User.css"
import Carousel from './Carousel'


interface Props { }



export const User = (props: Props) => {

    const handleUser1 = () => {
        console.log("1")
    }

    const handleUser2 = () => {
        console.log("1")
    }

    return (
        <>
            <div className="grid-container">

                <div className="grid-item">
                    <div className='img'><img src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740" alt="" /></div>
                    <div className="btn"><button className="btns" onClick={handleUser1}>User1</button></div>
                </div>
                <div className="grid-item">
                    <div className='img1'><img src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740" alt="" /></div>
                    <div className="btn1"><button className='btns' onClick={handleUser2}>User2</button></div>
                </div>
            </div>
            <Carousel />
        </>

    )
}
