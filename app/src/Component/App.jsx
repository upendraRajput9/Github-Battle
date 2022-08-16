import { Component } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Popular from './Popular';
import Battle from './Battle';

export default class App extends Component {
  constructor(props) {
    super();
    this.state={
        mode:"light"
    }
  }
  render() {
    let {mode}=this.state;
    
    return (
      <div className={mode==="light"?"dark":"light"} style={{backgroundColor:mode==="light"?"white":"rgb(28,32,34)" }}>
        <header>
          <nav>
            <NavLink to="/">Popular</NavLink>
            <NavLink to="/battle">Battle</NavLink>
          </nav>{
          mode==="light"?
          <figure onClick={()=>this.setState({mode:"dark"})}>
          <img className='tourch' src="./icons8-flashlight-64.png" alt='mode'/>
      </figure>:
        <figure  onClick={()=>this.setState({mode:"light"})}>
           <img src="./icons8-bulb-64.png" alt='dark'/>
        </figure>}
        </header>
        <Routes>
          <Route path="/" element={<Popular mode={mode} />} />
          <Route path="/battle" element={<Battle mode={mode}/>} />
        </Routes>
      </div>
    );
  }
}
