import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Signin from '../routes/auth/Signin';
import Signup from '../routes/Signup';
import ProtectedRoute from '../routes/auth/ProtectedRoute';
import WelcomePage from '../routes/Welcome';
import BlogPost from '../routes/blogposts/blogpost';
import BlogPage from '../routes/Blog';
import ProjectsPage from '../routes/Projects';
import NothingHerePage from '../routes/NothingHere';
import Project from '../routes/projects/project';
import SigninModal from '../routes/auth/SigninModal';

function AnimatedRoutes() {

let location = useLocation();
let state = location.state;
console.log('Path: '+location.pathname);
console.log(state);

    return (
      <AnimatePresence>
        <Routes location={state?.modal || location} key={{ location }.pathname}>
          <Route index element={<WelcomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/blogpost" element={<BlogPost />} />
          <Route path="work" element={<ProjectsPage />} />
          <Route
            path="work/:id"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NothingHerePage />} />
        </Routes>

        {/* Show the modal when a `backgroundLocation` is set */}
        {/* {state?.modal && (
          <Routes>
            <Route path="signin" element={<SigninModal />} />
          </Routes>
        )} */}
      </AnimatePresence>
    );
}

export default AnimatedRoutes;