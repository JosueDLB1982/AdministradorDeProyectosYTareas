import { Fragment } from "react"
import Task from './Task'

const TaskList = () => {

    const projectTasks = [
        {name: 'Elegir Plataforma', state: true},
        {name: 'Elegir Colores', state: false},
        {name: 'Elegir Plataformas de Pago', state: false},
        {name: 'Elegir Hosting', state: true},
    ]

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas">
                {projectTasks.length === 0
                    ? (<li className="tarea"><p>No hay Tasks</p></li>)
                    : projectTasks.map(task => (
                        <Task
                            task={task}
                        />
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default TaskList
