import './style.css'
import { useState, useEffect } from 'react'


const GoTop = () => {

    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <div className={showGoTop ? '' : "goTopHidden"} onClick={handleScrollUp}>
            <button type={'button'} className="goTop">
                <span className="goTop__text">
                    <img src='../images/GoUp.png'></img>
                </span>
            </button>
        </div>
    )
}

export default GoTop;