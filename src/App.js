import React, {useState, useEffect} from 'react';
import NewProject from './components/NewProject';
import ProjectList from './components/ProjectList';
import {getProjectsService, createProjectService} from './project.service';

function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    getProjectsService()
    .then( ({data}) => setProjects(data))
    .catch( (err) => console.log(err));
  }, [])

  const createProject = async (newProject) => {
    const { data: createdProject } = await createProjectService(newProject);
    console.log('data :>> ', createdProject);
    setProjects([...projects, createdProject]);
  }

  console.log('projects :>> ', projects);

  return (
    <div className="App">
      <h1>My app title</h1>
      <NewProject addProject={createProject} />

      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
