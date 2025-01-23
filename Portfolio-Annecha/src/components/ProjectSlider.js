import React from 'react';
import './ProjectSlider.css';
import FloatingBox from './FloatingBox';

const projects = [
    { title: "", description: "", image: './Image/jeu.png', link: 'https://github.com/Deniz09OK/Projet-Jeu-Java.git' },
    { title: "", description: "", image: './Image/GEP.png', link: 'https://www.canva.com/design/DAETqVJvE4U/aK9VzX0TvqX8d1XS9zN-7Q/edit?utm_content=DAETqVJvE4U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { title: "", description: "", image: './Image/PS.png', link: 'https://www.canva.com/design/DAEYijuKfyE/4YQYppS9SjgkPp2VLcCa1w/edit?utm_content=DAEYijuKfyE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { title: "", description: "", image: './Image/sani.png', link: 'https://www.canva.com/design/DAGcEd6lmrw/apPlw5B9T1KsMYPZjuMNSw/edit?utm_content=DAGcEd6lmrw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
];

const ProjectSlider = () => {
    return (
        <div className="slider-container">
            <h1>Mes Projets.</h1>
            <p>"Découvrez une sélection de mes projets que j'ai réalisés au cours de mes différentes expériences professionnelles et académiques."</p>
            <div className="slider">
                {projects.map((project, index) => (
                    <FloatingBox key={index}>
                        <div className="slide">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="project-image zoom zoom:hover" />
                            </a>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </FloatingBox>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
