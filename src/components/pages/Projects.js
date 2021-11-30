import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <div className="mb-large">
                <h1 className="mb-tiny">Projects</h1>
                <p className="txt-large">
                    In my spare time I like to tinker on side projects. These
                    are some of the results.
                </p>
            </div>

            <section>
                <div className="project-preview">
                    <figure className="project-preview__media">
                        <Link to="/projects/wood-bazar">
                            <img
                                src={
                                    window.location.origin +
                                    '/images/projects/project-1.jpeg'
                                }
                                alt="Screenshot of Wood Bazar"
                            />
                        </Link>
                    </figure>
                    <div className="project-preview__content">
                        <h2 className="project-preview__title">
                            <Link to="/projects/wood-bazar">Wood Bazar</Link>
                        </h2>
                        <p className="project-preview__desc">
                            A to do app with a focus on simplicity. Only the
                            features you need to get things done.
                        </p>
                        <div className="project-preview__meta">
                            <ul className="list list--regular">
                                <li className="list__item">Logo Design</li>
                                <li className="list__item">Web App Design</li>
                                <li className="list__item">
                                    Web App Development
                                </li>
                            </ul>
                        </div>
                        <div className="project-preview__action">
                            <Link to="/projects/wood-bazar" className="btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <figure className="project-preview__media">
                        <Link to="/projects/travely">
                            <img
                                src={
                                    window.location.origin +
                                    '/images/projects/project-2.jpeg'
                                }
                                alt="Screenshot of Travely"
                            />
                        </Link>
                    </figure>
                    <div className="project-preview__content">
                        <h2 className="project-preview__title">
                            <Link to="/projects/travely">Travely</Link>
                        </h2>
                        <p className="project-preview__desc">
                            Web design blog focused on helping beginners with
                            tutorials, videos, code snippets and freebies.
                        </p>
                        <div className="project-preview__meta">
                            <ul className="list list--regular">
                                <li className="list__item">Logo Design</li>
                                <li className="list__item">Web Design</li>
                                <li className="list__item">
                                    WordPress Development
                                </li>
                            </ul>
                        </div>
                        <div className="project-preview__action">
                            <Link to="/projects/travely" className="btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
