import { useEffect, useState } from "react"

const Header = ({hours}) => {
  let [total, setTotal] = useState(0)

const totalPrice = () => {
  let total = 0
  hours.map((heure) => {
    heure.cours.map((cours) => {
     
      cours.map((cour) => {
       if(cour.onSelected === true) {
           total += cour.prix
        }
      })
    })
  })
  return total
}

useEffect(() => {
  setTotal(totalPrice())
}, [hours]);
  return (
    <div className="headerCss">
       <h1 className="headerH1">CALENDRIER</h1>
        <br />
        <hr />
        <br />
        <div className="header-app">
        <h5>SESSION DECEMBRE 2022</h5>
        <h5>04 déc.2022 - 19 janv.2023</h5>
        <p className="headerPara">
          <span>Prix Total : {total}  &nbsp;  &nbsp; &nbsp; </span>
          <button className="btnHeader"> S"inscrire </button>
        </p>
        </div>
    </div>
  )
}

export default Header
