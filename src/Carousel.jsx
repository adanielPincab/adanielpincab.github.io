import { useEffect } from 'react';
import './Carousel.css'

function Carousel({data, accent}) {
    return <div className="carousel">
        {
            data.map( x => (
                <a href={x.link} target="_blank">
                <div key={x.id} className="nutshell" id={x.id}
                style={{border: "2px solid " + accent}}>
                    <div className="nutshell-text">
                        <h1 style={{color: accent}}>{x.title}</h1>
                        <p>{x.caption}</p>
                    </div>
                    <div className="nutshell-image" style={{backgroundImage: "url(data:image/png;base64," + x.pictureBase64 + ")"}}>
                    </div>
                </div>
                </a>
            ))
        }
        </div>
}

export default Carousel;