import { Fragment, useState } from "react"

const NewProject = () => {

    // state para proyecto
    const [project, saveProject] = useState({
        name: '',

    })

    // extraer keys de proyecto
    const {name} = project

    // lee la información introducida en el input
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario envía un proyecto
    const onSubmitProject = e => {
        e.preventDefault()

        // Validar el proyecto


        // Agregar proyecto al state


        // Reiniciar el form
    }

    return (
        <Fragment>

            <button
                type="button"
                className="btn btn-primario btn-block"
                value="Crear Proyecto"
            >
                Nuevo Proyecto
            </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="name"
                    onChange={onChangeProject}
                    htmlForm=""
                    value={name}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>

        </Fragment>
    )
}

export default NewProject

