import Project from "./Project"

const ProjectsList = () => {

    const projects = [
        {name: 'Tienda Virtual'},
        {name: 'Intranet'},
        {name: 'Diseño de sitio WEB'}
    ]

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ProjectsList
