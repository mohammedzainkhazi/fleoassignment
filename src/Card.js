import React from 'react'


function Card(props) {
  return (
    <div className="card">
      <div className="container" style={{marginBottom:"5vh"}}> 
        <p><b>{props.name}</b></p>
        <p><b>{props.complete}% </b>Complete</p>
      </div>
      <div className="sales">
        <div className="data">
          <p><b>Total Sale - {props.total} Crore</b></p>
          <p><b>Target Sale - {props.target} Crore</b></p>
        </div>
        <p className="status" style={{backgroundColor:`${props.complete <= 66 ? props.complete < 30 ? "red" : "orange" : "green"}`}}>{props.status}</p>
      </div>
      <div style={{color:"white",borderRadius:"20px",width:`${props.complete}%`,marginTop:"20px",height:"10px",opacity:"0.5", backgroundColor:`${props.complete <= 66 ? props.complete < 30 ? "red" : "orange" : "green"}`}}>
      </div>
    </div>
  )
}

export default Card