import React from 'react';
import Fcomp from './components/Fcomp';
import Ui from './components/Ui';
import './App.css';
class App extends React.Component{
  state={
    num: 0
  }
addnum = ()=>{
this.setState({num: this.state.num+1});
}
subnum = ()=>{
this.setState({num: this.state.num-1});
}
reset =()=>{
this.setState({num:0});
}
  render(){
      return(
        <div className='wrapper'>
          <Fcomp  addnum={this.addnum}
                  subnum={this.subnum}
                  reset={this.reset}
          />
          <Ui num={this.state.num}/>
          </div>
      )
    }
}
export default App;
