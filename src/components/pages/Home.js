import React from 'react';
import resume from '../../download/jahid_hasan-resume.pdf';

const Home = () => {
    return (
        <section className="page">
            <div className="wysiwyg">
                <h1>Hi, I'm Jahid.</h1>
                <p className="txt-large">
                    I am a qualified and professional full-stack web developer
                    with one year of experience in React.js and Node.js. Strong
                    creative and analytical skills. For more details, please
                    download my
                    <a target="_blank" rel="noreferrer" href={resume}>
                        {' '}
                        Resume
                    </a>
                    .
                </p>
                <p>
                    My most recent project is{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/jahidorjahid/wood-bazar-client-side"
                    >
                        Wood Bazar
                    </a>
                    . It's a dynamic and responsive furniture store built with{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://reactjs.org/"
                    >
                        React
                    </a>{' '}
                    and{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://nodejs.org/en/"
                    >
                        Nodejs
                    </a>
                    .
                </p>
                <p>
                    You can usually find me on{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://facebook.com/jahidorjahid"
                    >
                        Facebook
                    </a>
                    , but I'm occasionally on{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/jahidorjahid"
                    >
                        Twitter
                    </a>{' '}
                    and{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jahidorjahid/"
                    >
                        LinkedIn
                    </a>{' '}
                    as well.
                </p>
                <div className="grid grid--tb2-12">
                    <div className="grid__column grid__column--6">
                        <figure>
                            <img
                                width={308}
                                height={251}
                                src={
                                    window.location.origin +
                                    '/images/image-1.jpg'
                                }
                                alt="Nature Programmer"
                            />
                            <figcaption>
                                Everyone wants to enjoy nature, right?
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid__column grid__column--6">
                        <figure>
                            <img
                                width={308}
                                height={251}
                                src={
                                    window.location.origin +
                                    '/images/image-2.jpg'
                                }
                                alt="Lovely Cat"
                            />
                            <figcaption>Love is a four-legged word.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
