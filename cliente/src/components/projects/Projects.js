import { Fragment } from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import TaskForm from "../tasks/TaskForm"
import TaskList from "../tasks/TaskList"



const Projects = () => {
    return (
        <Fragment>
            <div className="contenedor-app">
                <Sidebar />
                <div className="seccion-principal">
                    <Header />
                    <main>
                        <TaskForm />
                        <div className="contenedor-tareas">
                            <TaskList/>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>

    )
}

export default Projects
