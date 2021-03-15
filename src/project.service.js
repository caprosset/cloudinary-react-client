import axios from 'axios';

const projectApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api`
})

export const getProjectsService = () => projectApi.get('/projects');

export const createProjectService = (project) => projectApi.post('/projects/create', project);

export const uploadFileService = (file) => projectApi.post('/projects/upload', file);