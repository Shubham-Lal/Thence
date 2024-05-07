import './style.css'
import { useState } from 'react'
import { accordionData } from '../../../data/accordionData'

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(2);

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
                    {accordionData.map((item, index) => (
                        <div key={index}>
                            <div
                                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}

                            >
                                <div className='accordion-title' onClick={() => setActiveIndex(index)}>
                                    {item.title}
                                    <span className='accordion-icon'>{activeIndex === index ? '-' : '+'}</span>
                                </div>
                                <div className='accordion-content'>
                                    {item.content}
                                </div>
                            </div>
                            <div
                                style={{
                                    margin: '20px 0 30px 0',
                                    width: '100%',
                                    height: '1px',
                                    background: accordionData.length !== index + 1 ? '#D7D7D7' : ''
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Hero