import { useEffect, useState } from "react"
import Header from "../Header/Header"
import TableCourses from "./TableCourses";
import { fetchDays2 } from "../redux/features/daySlice";
import { fetchHours, addClickFunction } from "../redux/features/hoursSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";


const Home = () => {
  const [loginData, setLoginData] = useState([])
  let [total, setTotal] = useState(0);
  const [hours2, setHours2] = useState([])
  const dispatch = useDispatch();
  const Birthday = () => {
    const getuser = localStorage.getItem("user_login")
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)
      setLoginData(user)
    }
  }
  useEffect(() => {
    Birthday()
    dispatch(fetchHours())
    dispatch(fetchDays2())
  }, [])
  const days = useSelector((state) => state.days.days)
  const {loading,hours,error} = useSelector((state) => state.hours)
  const stateHours = [...hours]
  const onToggle = (crenauHeureId, coursId, id, prix) => {
    dispatch(addClickFunction({crenauHeureId, coursId, id, prix }))
  }
  
  return (
    <div>
      <Header hours={hours} />
      <div className="tableParty">
        <TableCourses days={days} hours={hours} onClickAdd={onToggle} />
      </div>
      <Footer />
    </div>
  )
}


export default Home
