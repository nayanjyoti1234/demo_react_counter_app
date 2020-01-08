import React from 'react';
import { Button } from 'reactstrap';
const Fcomp=(props)=>{
    const {addnum,subnum,reset}=props;
 return(
        <div className='buttons'>
        <Button onClick={addnum} className="bt1" color="success"><span className='add'> + </span></Button>
        <Button onClick={subnum} className="bt2" color="danger"><span className='sub'> - </span></Button>
        <Button onClick={reset}  className="bt3" color="warning"><span className='reset'> reset </span></Button>
        </div>
     );
}
export default Fcomp;