import React from 'react';
import ReactDOM from 'react-dom';
import "./AnalogClock.css";

function Dial(props){
  // 要素作成
  const dials = new Array();
  for(let i=0; i < 30; i++){
    // set id
    const id = "dial" + i;
    //set class
    let className="dial";
    className += i%5==0? i%15==0? " fifteens":" fives ":"" ;
    //set deg
    const rotateDeg = (90 + i*6) + "deg";
    const style= {transform:"rotate("+rotateDeg+")"};
    
    dials.push(
      <div id={id} className={className} style={style}></div>
    );
  }

  return(
    <div>
      {dials}
    </div>
  )
}

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
        <Dial />
        <HourHand hour={hour} minute={minute}/>
        <MinuteHand minute={minute}/>
        <SecondHand second={second}/>
        <div className="pin"></div>

      </div>
    );
  }
}
