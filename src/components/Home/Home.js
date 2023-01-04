import { useEffect, useState } from "react"
import Header from "../Header/Header"
import Table from 'react-bootstrap/Table';

const Home = () => {

  const [loginData, setLoginData] = useState([])
  const [days, setDays] = useState([
    {
      "id": 1,
      "libelle": "Lundi",
    },
    {
      "id": 2,
      "libelle": "Mardi",
    },
    {
      "id": 3,
      "libelle": "Mercredi",
    },
    {
      "id": 4,
      "libelle": "Jeudi",
    },
    {
      "id": 5,
      "libelle": "Vendredi",
    },
    {
      "id": 6,
      "libelle": "Samedi",
    },
    {
      "id": 7,
      "libelle": "Dimanche",
    },
  ])
  const [hours, setHours] = useState([
    {
      id: 9,
      heure: "18:10",
      cours: [
        [],
        [
          { id: 5, libelleCours: "Salsa 1", prix: 18000, onSelected: false }, 
          { id: 6, libelleCours: "Kiz 1", prix: 15000, onSelected: false },
          { id: 7,libelleCours: "Salsa 4", prix: 25800, onSelected: false },
          { id: 8,libelleCours: " ", prix: null },
        ],
        [
          { id: 9, libelleCours: "Salsa 1", prix: 12500, onSelected: false }, 
          { id: 10, libelleCours: "Kiz 1", prix: 14500, onSelected: false },
          { id: 11, libelleCours: "Salsa 4", prix: 13500, onSelected: false },
          { id: 12,libelleCours: " ", prix: null },
        ],
        [
          { id: 13, libelleCours: "Salsa 1", prix: 14500, onSelected: false }, 
          { id: 14, libelleCours: "Kiz 1", prix: 14000, onSelected: false },
          { id: 15, libelleCours: "Salsa 4", prix: 13000, onSelected: false },
          { id: 16, libelleCours: "", prix: null },
        ],
        [],
        [],
        [
          { id: 17, libelleCours: "Salsa 1", prix: 10500, onSelected: false }, 
          { id: 18, libelleCours: "Kiz 1", prix: 16000, onSelected: false },
          { id: 19, libelleCours: "", prix: null },
          { id: 20, libelleCours: "", prix: null },
        ]
      ]
    },
    {
      id: 10,
      heure: "19:15",
      cours: [
        [],
        [
          { id: 21, libelleCours: "kiz 2", prix: 12690, onSelected: false }, 
          { id: 22, libelleCours: "Ruead3", prix: 12400, onSelected: false },
          { id: 23, libelleCours: "Ruead4", prix: 12500, onSelected: false },
          { id: 24, libelleCours: " ", prix: null },
        ],
        [
          { id: 25, libelleCours: "Bachala2", prix: 15800, onSelected: false }, 
          { id: 26, libelleCours: "Salsa 3", prix: 14700, onSelected: false },
          { id: 27, libelleCours: "Salsa 1", prix: 18500, onSelected: false },
          { id: 28,libelleCours: " ", prix: null },
        ],
        [
          { id: 29, libelleCours: "Salsa 2", prix: 16900, onSelected: false }, 
          { id: 30, libelleCours: " ", prix: null },
          { id: 31, libelleCours: "", prix: null },
          { id: 32, libelleCours: " ", prix: null },
        ],
        [],
        [],
        [
          { id: 33, libelleCours: "Bachala1", prix: 10500, onSelected: false }, 
          { id: 34, libelleCours: "Rueda1", prix: 12500, onSelected: false },
          { id: 35, libelleCours: "", prix: null },
          { id: 36, libelleCours: "", prix: null },
        ]
      ]
    },
    {
      id: 11,
      heure: "20:25",
      cours: [
        [],
        [
          { id: 37, libelleCours: "urban Kiz", prix: 50000, onSelected: false }, 
          { id: 38, libelleCours: "Salsa 3", prix: 15960, onSelected: false },
          { id: 39,libelleCours: " ", prix: null },
          { id: 40,libelleCours: " ", prix: null },
        ],
        [
          { id: 41, libelleCours: "Ruead3", prix: 12000, onSelected: false }, 
          { id: 42, libelleCours: " ", prix: null },
          { id: 43, libelleCours: " ", prix: null },
          { id: 44,libelleCours: " ", prix: null },
        ],
        [
          { id: 45, libelleCours: " ", prix: null }, 
          { id: 46, libelleCours: " ", prix: null },
          { id: 47, libelleCours: "" , prix: null},
          { id: 48, libelleCours: " ", prix: null },
        ],
        [],
        [],
        [
          { id: 49, libelleCours: " ", prix: null }, 
          { id: 50, libelleCours: " ", prix: null },
          { id: 51, libelleCours: "", prix: null },
          { id: 52, libelleCours: "", prix: null },
        ]
      ]
    },
  ])
  const [onSelected, setOnSelected] = useState(false)

let [counts, setCounts] = useState(0);


const onToggle = (price,id) => {

        setCounts(counts += price);
        let hoursCounts = hours
        hoursCounts.map((heure) => {
          heure.cours.map((cours) => {
            cours.map((cour) => {
             if(cour.id === id) {
              cour.onSelected = true           
             } else {
              console.log("error");
             }
            })
          })
        })
   }
  const onChangeColor = (id) => {
    console.log("Marcelin")
  }

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login")
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)
      setLoginData(user)
    }
  }
  useEffect(() => {
    Birthday();
  }, [])
  return (
    <div>
      <Header totalCount={counts} />
      <div className="tableParty">
        <Table  bordered hover>
          <thead>
            <tr className="tableLine">
              <th className="tableHeader" style={{ textAlign: "center" }}>Horaires</th>
              {days.map((day, index) => (
                <th key={index.toString()} className="tableHeader" style={{ textAlign: "center" }}>{day.libelle}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              hours.map((crenau)=>{
                return (
                  <tr>
                    <td className="heureCss">{crenau.heure}</td>
                    {
                      crenau.cours.map((cours)=>{
                       
                        return (
                          <td  style={{ textAlign: "center" }} className="tdCours">
                              {
                                 cours.map((cour)=>{
                                  let nom = cour.libelleCours
                                  return cour.prix === null ?(
                                   <span> {nom} <br /></span>
                                  ):(
                                    <p className={`coursCss ${cour.onSelected ? 'coursColorCss' : ''}` }  onClick={()=> onToggle(cour.prix, cour.id)}>{nom} : {cour.prix} <br /></p>
                                  )
                                 })
                              }
                          </td>
                        )
                      })
                    }  
                    
                    
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Home
