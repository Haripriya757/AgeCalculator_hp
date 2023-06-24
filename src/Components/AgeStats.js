import React, { Component } from "react";
import partyPopper from "../assets/party-popper.jpg";
import "./App.css";

class AgeStats extends Component {
  calculateAge = date => {
    const today = new Date().getTime();
    const birthday = new Date(date).getTime();
    const age_mili = Math.abs(today - birthday);

    let days = Math.floor(age_mili / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, ${days} days!`;
  };
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
        crossOrigin="anonymous"></link>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.calculateAge(this.props.date)}!</h4>
        <img src={partyPopper} alt="Yayyy" className="party-popper" />
      </div>
    );
  }
}

export default AgeStats;
