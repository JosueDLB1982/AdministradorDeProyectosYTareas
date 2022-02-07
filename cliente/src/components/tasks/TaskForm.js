

const TaskForm = () => {
    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        id=""                    
                    />
                </div>

                <div className="contendor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default TaskForm
