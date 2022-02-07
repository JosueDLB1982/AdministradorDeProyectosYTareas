import NewProject from "../projects/NewProject"
import ProjectsList from "../projects/ProjectList"

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<samp>Tasks</samp></h1>

            <NewProject />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                
                <ProjectsList/>
            </div>
        </aside>
    )
}

export default Sidebar
