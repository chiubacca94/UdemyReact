import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState(
    {
      // undefined means no project is selected and not adding a new project
      // null means a new project is being created (add project button clicked)
      selectedProjectId: undefined, 
      projects: [],
      tasks: [],
    }
  );

  function handleStartAddProject() {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    // reset selectedProjectId to undefined
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleFinishAddProject(projectData) {
    setProjectState( prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: Math.random().toString(), // just for demo purposes
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }

  function handleDeleteProject(projectId) {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        // filter out the deleted project from the projects array 
        projects: prevState.projects.filter(project => project.id !== projectId),
      }
    })
  }

  function handleAddTask(taskData) {
    setProjectState( (prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: taskData,
        id: taskId,
        projectId: prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks], // Spread the previous tasks and add the new task
      }
    });
  }

  // Input is the taskid of the task to be deleted
  function handleDeleteTask(taskId) {
    setProjectState( prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      }
    })
  }

  console.log(projectState); // to see if the list of projects is updating

  // find the selected project based on the selectedProjectId in the state is true
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = (<SelectedProject 
                  project={selectedProject} 
                  onDeleteProject={handleDeleteProject}
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                  tasks={projectState.tasks} />);

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleFinishAddProject} onCancelAddProject={handleCancelAddProject} />;
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    // h-screen is the full height of the screen
    // my-2 is a margin of 2 units
    <main className="h-screen my-2 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
