import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
// import Project from './components/pages/Project';
import Work from './components/pages/Work';
import Articles from './components/pages/Articles';
import Article from './components/pages/Article';
import Contact from './components/pages/Contact';

function App() {
    return (
        <Router>
            <div className="wrap">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="/" element={<Home />} />
                        <Route path="work" element={<Work />} />
                        <Route path="projects" element={<Projects />} />
                        <Route
                            path="projects/:name"
                            element={<h1>Page Under Construction</h1>}
                        />
                        <Route path="articles" element={<Articles />} />
                        <Route
                            path="/articles/my-current-setup"
                            element={<Article />}
                        />
                        <Route
                            path="articles/*"
                            element={<h1>404 - Not Found</h1>}
                        />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<h1>404 - Not Found</h1>} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
