import React from 'react';



function Participant(props) {

    if (props.inSession === true) {
        return (
            <div className='Participant'>
                <div className='img'>
                    <img src={props.avatar} alt='avatar'>
                    </img>
                </div>

                <div className='name'>
                    <h4>
                        {props.name}
                    </h4>
                </div>

                <div className='in session'>
                    <p>
                        {props.inSession}
                    </p>
                </div>
            </div>
        )
    }
        else {
            return null
        }
}
    

export default Participant; 