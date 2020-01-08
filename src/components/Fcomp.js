import React from 'react';

const Fcomp=(props)=>{
    const {addnum,subnum,reset}=props;
 return(
        <div className='buttons'>
        <button onClick={addnum} className='bt1'><span className='add'> + </span></button>
        <button onClick={subnum} className='bt2'><span className='sub'> - </span></button>
        <button onClick={reset}  className='bt3'><span className='reset'> reset </span></button>
        </div>
     );
}
export default Fcomp;