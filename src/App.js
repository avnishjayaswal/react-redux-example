import React from 'react';
import './App.css';
import { connect } from 'react-redux' ;


class App extends React.Component {



  render() {
    return (
    <div className="App">
     <div>count:{this.props.count}</div>
      <button onClick={this.props.countUp} >count Up</button>
      <button onClick={this.props.countDown}>count Down</button>
    </div>
    );

  }
}

const mapStateToProps = (state) => {
   
   return {
     count:state.count
   }

} ;

const mapDispatchToProps = (dispatch) => {
   
  return {
    countUp: () => dispatch({type:'count_UP'}),
    countDown: () => dispatch({type:'count_Down'})
  }

} ;

export default connect(mapStateToProps, mapDispatchToProps) (App);
