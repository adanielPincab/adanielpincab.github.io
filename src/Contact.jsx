import { useState, useEffect } from 'react';
import { BsLinkedin, BsGlobe2, BsFillEnvelopeFill, BsGithub} from "react-icons/bs";
import './Contact.css';

function Contact({ accent }) {
    const [link, setLink] = useState('https://www.adanielpincab.es');

    const timer = ms => new Promise(res => setTimeout(res, ms))

    useEffect(()=> {
        async () => {
            await timer(3000); // then the created Promise can be awaited
            alert('ola')
        }
    }, [])

    function shouldBeOutOrIn(ref) {
        return (ref == link) ? 'textin' : 'textout';
    }

    function shouldAccent(ref) {
        return (ref == link) ? accent : 'inherit';
    }

    return <div className="chooseScreen">
            <div className="chooser">
                <BsLinkedin style={{fill: shouldAccent('https://www.linkedin.com/in/adanielpincab')}} id="linkedin" onClick={() => {
                    setLink('https://www.linkedin.com/in/adanielpincab');
                    }}/>
                <BsGithub style={{fill: shouldAccent('https://github.com/adanielpincab')}} id="mail" onClick={() => {
                    setLink('https://github.com/adanielpincab');
                    }}/>
                <BsGlobe2 style={{fill: shouldAccent('https://www.adanielpincab.es')}} id="website" onClick={() => {
                    setLink('https://www.adanielpincab.es');
                    }}/>
                <BsFillEnvelopeFill style={{fill: shouldAccent('mailto:adanielpincab@gmail.com')}} id="mail" onClick={() => {
                    setLink('mailto:adanielpincab@gmail.com');
                    }}/>
            </div>
            <a className={
                ((link == 'https://www.adanielpincab.es') || (link == 'mailto:adanielpincab@gmail.com'))
                ? "text" : "text lefted"
                } href={link} target="_blank">
                <div id="rotorPre">
                    <span className={shouldBeOutOrIn('https://www.linkedin.com/in/adanielpincab')} id="in">linkedin.com/in/</span>
                    <span className={shouldBeOutOrIn('https://github.com/adanielpincab')} id="git">github.com/</span>
                </div>
                <b style={{color: accent, fontWeight: 300}}>adanielpincab</b>
                <div id="rotorPost">
                    <span className={shouldBeOutOrIn('https://www.adanielpincab.es')} id="es" >.es</span>
                    <span className={shouldBeOutOrIn('mailto:adanielpincab@gmail.com')} id="at" >@gmail.com</span>
                </div>
            </a>
        </div>;
}

export default Contact;