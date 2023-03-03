import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
        <div className='rahul'>
            <h3 style={{ fontSize: "26px", textAlign: "center", color: "black" }}>Characters</h3>
            <div className="grid-container">

                <div className="grid-item">
                    <div className='img'><img src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740" alt="" /></div>
                    <div className="btn"><button className="btns" onClick={handleUser1}>ArmyChar</button></div>
                </div>
                <div className="grid-item">
                    <div className='img1'><img src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740" alt="" /></div>
                    <div className="btn1"><button className='btns' onClick={handleUser2}>HeroChar</button></div>
                </div>
                <div className="grid-item">
                    <div className='img1'><img src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740" alt="" /></div>
                    <div className="btn1"><button className='btns' onClick={handleUser2}>Zombie</button></div>
                </div>
            </div>
            <div style={{ marginTop: "250px" }}>
                <Carousel />
            </div>

            <div style={{ marginLeft: "600px" }}>
                <Link to="/game">
                    <button className='btns' onClick={handleUser2}>Start</button></Link>
            </div>

        </div>

    )
}
