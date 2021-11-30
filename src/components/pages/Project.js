import React from "react";

const Project = () => {
  return (
    <section>
      <div className="page">
        <div className="txt-center wysiwyg">
          <h1>Harlist</h1>
          <p className="txt-large">
            A to do app with a focus on simplicity. Only the features you need
            to get things done.
          </p>
        </div>
        <ul className="mt-small list list--regular list--inline list--inline-center">
          <li className="list__item">Logo Design</li>
          <li className="list__item">Web App Design</li>
          <li className="list__item">Web App Development</li>
        </ul>
        <div className="mt-large">
          <figure className="feature-media">
            <img
              src="https://res.cloudinary.com/sebkay/image/upload/h_640,w_578/v1629038789/harlist-_2x_fadl55.jpg"
              srcSet="https://res.cloudinary.com/sebkay/image/upload/h_640,w_578/v1629038789/harlist-_2x_fadl55.jpg 1x, https://res.cloudinary.com/sebkay/image/upload/v1629038789/harlist-_2x_fadl55.jpg 2x"
              alt="Screenshot of Harlist"
            />
          </figure>
        </div>
        <div className="mt-large wysiwyg">
          <h2>The Brief</h2>
          <p>
            To do list apps are everywhere, but my biggest issue with them all
            is how bloated they all are. Social login, user tracking, email
            notifications. The list goes on. I wanted something really simple to
            get the job done, so I built it.
          </p>
          <h2>The Result</h2>
          <p>
            A to do app should let you one thing easily, create to dos. That's
            with Harlist it's the only thing you can do.
          </p>
          <p>
            Aside from updating your account details, all you can do is create
            tasks or lists. Simple as that,
          </p>
        </div>
        <div className="mt-large txt-center">
          <a
            className="btn btn--large"
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
            View Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
