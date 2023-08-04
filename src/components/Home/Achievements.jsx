import React from 'react'
import "./Achievement.css"
import achievementicon1 from "../../assets/achievement-clienticon.png"
import achievementicon2 from "../../assets/achievement-projecticon.png"
import achievementicon3 from "../../assets/achievement-teamicon.png"
import achievementicon4 from "../../assets/achievement-awardicon.png"
import { Link } from 'react-router-dom'
const Achievements = () => {
  return (
    <div className='achievements'>
        <div className='achievements_left'>
            <div className='achievements_left_text'>
                <p className='achievements_left_text_start'>Achievements</p>
                <h2>SOME NUMBER OF <br /> OUR ACHIEVEMENTS</h2>
                <p className='achievements_left_text_desc'>Discover our exceptional track record: Over 300 satisfied clients, 30+ successfully executed projects, 10+ prestigious awards, and a committed team of 100+ dedicated professionals, all tailored for Canadian excellence.</p>
                <Link to='/services'><button className='btn-primary achievements_btn'>Get Started</button></Link>
            </div>
        </div>
        <div className='achievements_right'>
                <div className='achievement_circle'>
                    <img src={achievementicon1} alt="" />
                    <h3>3,00</h3>
                    <p>satisfied clients</p>
                </div>
            <div className='achievement_circle_mid'>
                <div className='achievement_circle'>
                    <img src={achievementicon2} alt="" />
                    <h3>30+</h3>
                    <p>projects completed</p>
                </div>
                <div className='achievement_circle'>
                    <img src={achievementicon3} alt="" />
                    <h3>100+</h3>
                    <p>dedicated staffs</p>
                </div>
            </div>
            <div className='achievement_circle'>
                <img src={achievementicon4} alt="" />
                <h3>10+</h3>
                <p>awards</p>
            </div>
        </div>
    </div>
  )
}

export default Achievements