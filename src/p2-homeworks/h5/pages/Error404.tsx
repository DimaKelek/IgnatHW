import React from 'react'
import S from './Error404.module.css'

function Error404() {
    return (
        <div className={S.main}>
            <div className={S.message_box}>
                <div className={S.angle}/>
                <div className={S.message}>
                    <div className={S.messageText}>What are you doing here motherfucker?</div>
                </div>
            </div>
            <div className={S.error_box}>
                <div>404</div>
                <div>Page not found</div>
            </div>

        </div>

    )
}

export default Error404
