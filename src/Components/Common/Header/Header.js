import React from 'react'
import "./header.css"
import bell from "../../../images/new.svg"

export default function Header() {
  return (
    <div>
      <header>
      <input
          type="text"
          className="header-input"
          placeholder="🔍   Search"
        ></input>
        <div className="user-details">
          <img className="notification" src={bell}></img>
          <p className="user-name">Gaurav Kotwal</p>
          <div className="dp"></div>
        </div>
      </header>
    </div>
  )
}
