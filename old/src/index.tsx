import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* 

<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />}>
          <Route path="project1" element={<Project1 />} />
          <Route path="project1" element={<Project2 />} />
        </Route>
        <Route path="blog" element={<Blog />}> 
          <Route path="blogpost1" element={<Blogpost1 />} />
          <Route path="blogpost2" element={<Blogpost2 />} />
        <Route/>
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>

*/







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
