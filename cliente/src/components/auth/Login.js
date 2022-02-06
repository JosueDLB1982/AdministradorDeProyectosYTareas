import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    // state de inicio de sesión
    const [user, saveUser] = useState({
        email: '',
        password: ''
    })

    // extraer de usuario
    const {email, password} = user

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault()

        // validar que no haya campos vacíos


        // pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>

                </form>

                <Link to={'NewAccount'} className="enlace-cuenta">
                    ¿No tienes cuenta? Crea una Aquí
                </Link>

            </div>
        </div>
    )
}

export default Login
