import React, {useState} from 'react';
import {uploadFileService} from './../project.service';

const initialState = {
  title: '',
  description: '',
  picture: ''
}

export default function NewProject({ addProject }) {
  const [ formState, setFormState ] = useState(initialState);
  const [ imageReady, setImageReady ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  const handleUpload = async (e) => {
    setImageReady(false);

    const fileToUpload = e.target.files[0];
    console.log('fileToUpload', fileToUpload);

    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);

    const { data } = await uploadFileService(uploadData);
    console.log('File uploaded :>> ', data);
    setFormState({ ...formState, imageUrl: data });
    setImageReady(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formState :>> ', formState);
    addProject(formState);
    setFormState(initialState);
    setImageReady(false);
  }

  return (
    <div>
      <h2>Create new project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={formState.title} onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={formState.description} onChange={handleChange} />

        <label htmlFor="picture">Picture</label>
        <input type="file" name="picture" id="picture" value={formState.picture} onChange={handleUpload} />

        <button type="submit" disabled={!imageReady}>Submit</button>
      </form>
    </div>
  )
}
