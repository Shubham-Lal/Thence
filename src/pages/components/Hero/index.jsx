import './style.css'

const Hero = () => {
    return (
        <main id='hero'>
            <div className='success-msg'>
                <p>Success Stories</p>
                <p>
                    Every success journey<br />
                    we've encountered.
                </p>
            </div>

            <div className='leads'>
                <div id='left'>
                    <div className='card1'>
                        <div style={{ position: 'relative' }}>
                            <img src='/sparkle.svg' alt='Sparkle' />
                            <h3>40%</h3>
                        </div>
                        <p>Achieved reduction in<br /> project execution time<br /> by optimising team<br /> availability</p>
                    </div>
                    <div className='people-img'>
                        <img src='/people.png' alt='People' />
                    </div>
                    <div className='card2'>
                        <div className='left'>
                            <img src='/rocket.svg' alt='Rocket' />
                        </div>
                        <div className='right'>
                            <h3>10 DAYS</h3>
                            <span>Staff Deployment</span>
                        </div>
                    </div>
                    <div className='card3'>
                        <div className='top'>
                            <h3>$0.5</h3>
                            <span>MILLION</span>
                        </div>
                        <p className='bottom'>
                            Reduced client expenses<br /> by saving on hiring and employee costs.<br />
                        </p>
                    </div>
                </div>
                <div id='right'>
                    <div className='swiper'>
                        <p>Enhance fortune 50<br /> company’s insights<br /> teams research<br /> capabilities</p>
                        <div className='swiper-btns'>
                            <button />
                            <button />
                            <button />
                        </div>
                    </div>
                    <button className='explore-btn'>
                        Explore More <img src='/arrow.svg' alt='Arrow' />
                    </button>
                </div>
            </div>

            <div className='questions'>
                <div className='left'>
                    <div className='header'>
                        <h3>What’s on your mind</h3>
                        <p>Ask Questions</p>
                    </div>
                    <img src='a.svg' alt='A' />
                </div>
                <div className='right'>
                    
                </div>
            </div>
        </main>
    )
}

export default Hero