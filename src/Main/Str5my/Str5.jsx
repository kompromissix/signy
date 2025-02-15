import './Str5.scss'

function Video(frame){
    return(
        <>
            <iframe width="575" height="340" src={} frameborder="0" allowfullscreen></iframe>
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
                    <div>
                        <h3>Название видео инструкции</h3>
                        <p>28.05.2020</p>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="//www.youtube.com/embed/FkX88N4pCow?rel=0" frameborder="0" allowfullscreen></iframe>

                    </div>
                </section>
            </main>
        </>
    )
}