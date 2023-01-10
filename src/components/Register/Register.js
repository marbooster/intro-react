import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
const Register = () => {
    const [flag, setFlag] = useState(false)
    const [inpval, setInpval] = useState({
        nom:"",
        email:"",
        password:""
    })
    const [data, setData] = useState([])

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

        const {nom, email, password} = inpval

        if (!nom || !email || !password) {
            setFlag(true)
        } else {
            setFlag(false)
            localStorage.setItem("useryoutube", JSON.stringify([...data,inpval]))
            history("/")
        }

        console.log(inpval)
    }
    return (
        <div className="outer">
            <div className="inner">
                <form action="" onSubmit={handleSubmit}>
                    <h1>S'enregistrer</h1>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" className="form-control" name='nom' placeholder="Nom" onChange={getData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" className="form-control"  name='email' placeholder="E-mail" onChange={getData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Passowrd</label>
                        <input type="password" className="form-control"  name='password' placeholder="Mot de passe" onChange={getData} />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-dark btn-md'>Enregistrer</button>
                    <p className="forgot-password"><NavLink to="/">Already registered {" "} log in ?</NavLink></p>

                    {flag && (
                        <Alert color="primary" variant="danger">
                            Please Fill every Field
                        </Alert>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Register
