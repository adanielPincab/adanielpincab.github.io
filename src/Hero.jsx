import './Hero.css'
import profileImg from './assets/profile_transparent.png'
import { useEffect } from 'react'
import DrawBlob from 'blob-animated'
import { TfiArrowCircleDown } from "react-icons/tfi";

function Hero({ accent, mask }) {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('arrow-down')
            .style.opacity = '100%';
        }, 2000);
    }, [])
    
    useEffect(() => {
        const Blob = new DrawBlob({
            canvas: document.getElementById('profile-mask'),
            vectors: [
                { x: 0.8, y: 0.8 },
                { x: 0.8, y: 0.2 },
                { x: 0.2, y: 0.2 },
                { x: 0.2, y: 0.8 }],
            speed: 200,
            scramble: 0.03,
            color: mask,
            inverted: true
          });
    }, [accent, mask])

    return (<>
        <section id="hero-section">
            <div>
                <h1 class="poppins">Ángel <b style={{color: accent}}>D</b>aniel Pinheiro</h1>
                <h2 class="poppins">Desarrollo de software</h2>
            </div>
            <div id="profile-container" style={{background: accent}}>
                <canvas id="profile-mask"></canvas>
                <img id="profile-pic" src={profileImg}></img>
            </div>
        </section>
        <a href="#about-me"><TfiArrowCircleDown id="arrow-down"/></a>
    </>)
}

export default Hero