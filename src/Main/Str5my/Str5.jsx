import './Str5.scss'
import { ways } from './data'
import { ways2 } from './photo'
import { Link } from "react-router-dom";
import Subscribe from '../Subscribe/Subscribe';
function Video(frame){
    return(
        <>
            <div className='frame'>
                <iframe width="575" height="340" src={frame.video}></iframe>
                <h3>{frame.h3}</h3>
                <p>{frame.p}</p>
            </div>
        </>
    )
}
export function Blog(photo){
    return(
        <>
            <Link to="/Str4" className='photo_div'>
                <img src={photo.img} alt="" />
                <div>
                    <h4>{photo.h4}</h4>
                    <h3>{photo.h3}</h3>
                    <div>
                        <div>
                            <a>{photo.p2}</a>
                        </div>
                        <div>
                            <a>{photo.p3}</a>
                        </div>
                    </div>
                    <p>{photo.p}</p>
                </div>
            </Link>
        </>
    )
}

export default function Str5(){
    return(
        <>
            <main className='str5'>
                <section className='StrName'>
                    <div>
                        <h5>Signy / Видео инструкции</h5>
                    </div>
                </section>
                <section className='background1'>
                    <h2>Видео инструкции</h2>
                    <div className='name_date'>
                        <h3>Название видео инструкции</h3>
                        <h4>28.05.2020</h4>
                    </div>
                    <div className='big_iframe'>
                        <iframe width="1230" height="590" src="https://rutube.ru/play/embed/d8697d044cb488325deb5ebf0d62e95b/"></iframe>
                    </div>
                    <div className='video_albom'>
                        {ways.map((way) =>(
                            <Video {...way}/>
                        ))}
                    </div>
                </section>
                <section className='background2'>
                    <h2>Может быть интересно:</h2>
                    <div>
                        {ways2.map((way) =>(
                            <Blog {...way}/>
                        ))}
                    </div>
                </section>
                <Subscribe/>
            </main>
        </>
    )
}