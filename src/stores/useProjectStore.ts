import { create } from 'zustand';

export interface Project {
  id: string;
  title?: string;
  description?: string;
}

interface ProjectStoreType {
  projects: Array<Project>;

  currentProjectId?: string;
  setCurrentProjectId: (id: string) => void;

  getCurrentProject: () => Project;

  addProject: (project: Project) => void;
  updateProject: (id: string, data: Project) => void;
  deleteProject: (id: string) => void;
}

const useProjectStore = create<ProjectStoreType>((set, get) => ({
    projects: [],
    addProject: (project: Project) => {
      set((state) => ({
        projects: [...state.projects, project],
      }));
    },
    updateProject: (id: string, data: Project) => {
      set((state) => ({
        projects: state.projects.map((project) => {
          if (project.id == id) {
            project = data
          }

          return project
        })
      }));
    },
    deleteProject: (id: string) => {
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
        currentProjectId: undefined
      }));
    },
    setCurrentProjectId: (id: string) => {
      set((state) => ({
        currentProjectId: id,
      }));
    },
    getCurrentProject: () => {
      return get().projects.find((project) => project.id == get().currentProjectId) as Project
    }
  }));

export default useProjectStore;
