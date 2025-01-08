import { create } from 'zustand';

export interface Project {
  id: string;
  title?: string;
  description?: string;
}

interface ProjectStoreType {
  projects: Array<Project>;
  addProject: (project: Project) => void;
}

const useProjectStore = create<ProjectStoreType>((set, get) => ({
    projects: [],
    addProject: (project: Project) => {
      set((state) => ({
        projects: [...state.projects, project],
      }));
    },
  }));

export default useProjectStore;
