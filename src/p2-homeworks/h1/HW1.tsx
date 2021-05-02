import React from 'react';
import {Message} from './Message';

const messageData = {
    avatar: 'https://sun9-28.userapi.com/impg/WTEiF0fXf5n8_fC7r8a_W5O9sSAVeJb6_ySCmg/x17NR9qW4cE.jpg?size=1172x906&quality=96&sign=91c461912d04e5788685df3cd4b63139&type=album',
    name: 'Дима',
    message: 'Привет, как дела?',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


        </div>
    )
}

export default HW1
