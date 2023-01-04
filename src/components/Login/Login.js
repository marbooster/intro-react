import { useState } from "react"
import { Alert } from "react-bootstrap"
import Home from "../Home/Home"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [flag, setFlag] = useState(false)
    const [inpval, setInpval] = useState({
        email:"",
        password:""
    })
    const [data, setData] = useState([{}])

    const getData = (e) => {

       // console.log(e.target.value)
        const { value, name } = e.target

       setInpval(() => {
            return {
                ...inpval,
                [name]:value
            }
        })
    }

    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const {email, password} = inpval

        const getuserArr = localStorage.getItem("useryoutube")
        const userdata = JSON.parse(getuserArr)
        const userLogin =  userdata.filter((el, k) => {
            return el.email === email && el.password === password
        })
        if (userLogin.length === 0) {
            setFlag(true)
        } else {
            setFlag(false)
            localStorage.setItem("user_login", JSON.stringify(userLogin))
            history("/home")
        }

    }


   /* const handleSubmit = (e) => {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"")
        let pass = localStorage.getItem("Password").replace(/"/g,"")

        if(!emaillog || !passwordlog) {
            setFlag(true)
            console.log("Empty")
        } else if(passwordlog !== pass || emaillog !== mail) {
            setFlag(true)

        }else {
            setFlag(false)
            history("/home")
        }
    }*/
    return (
        <div className="outer">
            <div className="inner">
            <form action="" onSubmit={handleSubmit}>
                <h1>Se connecter</h1>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="E-mail" onChange={getData} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Passowrd</label>
                    <input type="password" className="form-control" name="password" placeholder="Mot de passe" onChange={getData} />
                </div>
                <br />
                <button type="submit" className='btn btn-dark btn-md'>Se connecter</button>
                <p className="forgot-password"><NavLink to="/register">registered {" "} Register ?</NavLink></p>

                {flag && (
                    <Alert color="primary" variant="danger">
                        Please enter correct field
                    </Alert>
                )}
            </form>
        </div>
        </div>
        
    )
}

export default Login
