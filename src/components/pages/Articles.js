import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <section>
            <div className="mb-large">
                <h1 className="mb-tiny">Articles</h1>
                <p className="txt-large">
                    My latest thoughts on web development.
                </p>
            </div>

            <article className="post-preview">
                <h2 className="post-preview__title">
                    <Link to="/articles/my-current-setup">
                        My Current Setup - Jahid Hasan
                    </Link>
                </h2>
                <p className="post-preview__meta">
                    <Link to="/articles/category/assorted">Assorted</Link> / 24
                    August 2021 / 5 minute read
                </p>
                <div className="post-preview__excerpt">
                    <p>A quick look at what I'm currently using.</p>
                </div>
                <p className="post-preview__action">
                    <Link to="/articles/my-current-setup">Read Article →</Link>
                </p>
            </article>
        </section>
    );
};

export default Articles;
