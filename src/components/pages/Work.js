import React from "react";

const Work = () => {
  return (
    <>
      <div className="mb-large">
        <h1 className="mb-tiny">Work</h1>
        <p className="txt-large">
          Client projects and other professional work.
        </p>
      </div>

      <section>
        <div className="project-preview">
          <figure className="project-preview__media">
            <a href="/work/cazz-photography">
              <img
                src="https://res.cloudinary.com/sebkay/image/upload/h_640,w_578/v1628626256/thumbnail-cazz-photography_kmeesr.jpg"
                srcSet="https://res.cloudinary.com/sebkay/image/upload/h_640,w_578/v1628626256/thumbnail-cazz-photography_kmeesr.jpg 1x, https://res.cloudinary.com/sebkay/image/upload/v1628626256/thumbnail-cazz-photography_kmeesr.jpg 2x"
                alt="Screenshot of Cazz Photography"
              />
            </a>
          </figure>
          <div className="project-preview__content">
            <h2 className="project-preview__title">
              <a href="/work/cazz-photography">Cazz Photography</a>
            </h2>
            <p className="project-preview__desc">
              A simple portfolio showcasing the different aspects of Cazz as a
              photographer.
            </p>
            <div className="project-preview__meta">
              <ul className="list list--regular">
                <li className="list__item">Logo Design</li>
                <li className="list__item">Web Design</li>
                <li className="list__item">Static Site Development</li>
              </ul>
            </div>
            <div className="project-preview__action">
              <a href="/work/cazz-photography" className="btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
