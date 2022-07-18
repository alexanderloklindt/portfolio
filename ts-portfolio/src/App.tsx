import React from 'react';
import {Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet} from 'react-router-dom';
import Layout from "./routes/layout";
import WelcomePage from './routes/welcome';
import ProjectsPage from './routes/projects';
import BlogPage from './routes/blog';
import BlogPost from './routes/blog/blogpost';
import Project from './routes/projects/project';
import LoginPrompt from './routes/auth/login';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './routes/auth/protected';

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route
                path="/blog/blogpost"
                element={
                  <ProtectedRoute>
                    <BlogPost />
                  </ProtectedRoute>
                }
                />
            </Route>
            <Route path="/projects" element={<ProjectsPage />}>
            <Route
              path="/projects/project"
              element={
                <ProtectedRoute>
                  <Project />
                </ProtectedRoute>
              }
              />
            </Route>
            <Route path="/login" element={<LoginPrompt />} />
            <Route path="*" element={<p>404 mother4cker</p>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};