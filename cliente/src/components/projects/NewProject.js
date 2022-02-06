import { Fragment } from "react"

const NewProject = () => {
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
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="name"
                    htmlForm=""
                    value=""
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

