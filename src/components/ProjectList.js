import React from 'react';

export default function ProjectList({ projects }) {
  return (
    <div>
      <h2>List of projects</h2>
      { projects.map(project => (
        <div key={project._id}>
          <h4>{project.title}</h4>
          <img src={project.imageUrl} alt="Project pic" width="200"/>
          <DownloadLink src={project.imageUrl} >Click Here</DownloadLink>
          
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download target="_blank" rel="noreferrer">{this.props.children}</a>
        )
    }
}
