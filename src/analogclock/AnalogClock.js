import React from 'react';
import ReactDOM from 'react-dom';
import "./AnalogClock.css";

class HourHand extends React.Component{
  render(){
    // 角度設定
    const hour = this.props.hour - 0;
    const minute = this.props.minute - 0;
    const hourHands = document.getElementsByClassName("hourHand");
    Array.prototype.forEach.call(hourHands,hand=>{
      hand.style.transform="rotate("+ (hour*30 + minute/2 +90) +"deg)";
    })

    return(<div className="hand hourHand"></div>);
  }
}
class MinuteHand extends React.Component{
  render(){
    // 角度設定
    const minute = this.props.minute - 0;
    const minuteHands = document.getElementsByClassName("minuteHand");
    Array.prototype.forEach.call(minuteHands,hand=>{
      hand.style.transform="rotate("+ (minute*6+90) +"deg)";
    })

    return(<div className="hand minuteHand"></div>);
  }
}
class SecondHand extends React.Component{
  render(){
    // 角度設定
    const second = this.props.second - 0;
    const secondHands = document.getElementsByClassName("secondHand");
    Array.prototype.forEach.call(secondHands,hand=>{
      hand.style.transform="rotate("+ (second*6+90) +"deg)";
    })

    return(<div className="hand secondHand"></div>);
  }
}


export class AnalogClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }

  componentDidMount(){
    this.timer = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({date:new Date()});
  }
  render(){
    const hour = this.state.date.getHours();
    const minute = this.state.date.getMinutes();
    const second = this.state.date.getSeconds();
    return(
      <div className="analogClock">
        <HourHand hour={hour} minute={minute}/>
        <MinuteHand minute={minute}/>
        <SecondHand second={second}/>
      </div>
    );
  }
}
