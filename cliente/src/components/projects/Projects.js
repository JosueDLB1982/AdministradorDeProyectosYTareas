import { Fragment } from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"



const Projects = () => {
    return (
        <Fragment>
            <div className="contenedor-app">
                <Sidebar />
                <div className="seccion-principal">
                    <Header />
                    <main>
                        <div className="contenedor-tareas">
                            
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>

    )
}

export default Projects
