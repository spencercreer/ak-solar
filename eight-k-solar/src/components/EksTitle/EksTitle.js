import React from 'react';
import Fade from 'react-reveal/Fade';
import './style.css';

export default function EksTitle() {
    return (
        <div>
            <div className="eks-head">

                <Fade duration={2000}>
                    <div className="eks-title">
                       Get solar installed on your home for $8000
            </div>
            <div className="text-light text-center">
                       How much did your neighbor pay for solar?
            </div>
                </Fade>
            </div>
            <div className="eks-bg">
                <div className="text-center text-light">$0 DOWN</div>
                <div className="text-center text-light">Monthly payments LESS THAN you currently pay for electricity</div>
                <div className="text-center text-light">Emergency power supply</div>
         
            </div>
        </div>
    )
}
