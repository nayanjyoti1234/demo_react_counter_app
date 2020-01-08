import React from 'react';

const Ui=(props)=>{
 return(
        <div className='wrapui'>
            <span className='num'>
                    {props.num}
            </span>
        </div>
     );
}
export default Ui;