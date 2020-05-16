import React from 'react';
import angry1 from '../AngryFeeling/images/angry.svg';
import help from '../AngryFeeling/images/help card 2 1.svg';
import quiet from '../AngryFeeling/images/quiet.svg';


function AngryFeeling() {
    return (
        <div>
            
            <h1 className="told">You've told us that you are feeling...</h1>

            <div className="feelingtitle">
                <img src={angry1} alt="angry1" />
            </div>

           <h2 className="nextstep">Next Steps...</h2>

           <div className="quiet">
                <h2>Because you're feeling angry, we recommend taking a break for 10 minutes in a quiet place of your choice</h2>
                <img src={quiet} alt="quiet" />
           </div>

           <div className="help">
                <h2>If you require further assistance, please press the 'help' button below and we'll get someone to help you right away</h2>
                <img src={help} alt="help" />
           </div>  
           
        </div>
        ) 
    }

    export default AngryFeeling;