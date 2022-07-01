import './App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, Suspense } from 'react';

import Footer from './Footer'
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Articles from "./routes/Articles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const lngs : { [key: string]: any } = {
  en: { nativeName: 'English' },
  da: { nativeName: 'Dansk' },
  fr: { nativeName: 'Français' },
  es: { nativeName: 'Español'}
};

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <header className="App-header">
        <nav>
          <Link to="/">{t('routes.home')}</Link>
          <Link to="/projects">{t('routes.projects')}</Link>
          <Link to="/articles">{t('routes.articles')}</Link>
          <Link to="/about">{t('routes.about')}</Link>
          <Outlet />
        </nav>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button 
              key={lng} 
              style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} 
              type="submit" 
              onClick={() => {i18n.changeLanguage(lng);setCounter(count + 1);}}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <Routes>
            <Route index element={<Home t={t} />} />
            <Route path="about" element={<About t={t} />} />
            <Route path="projects" element={<Projects t={t} />} />
            <Route path="articles" element={<Articles t={t} />} />
            <Route path="*" element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
                <p><Link to="/">Go to the home page</Link></p>
              </main>} />
        </Routes>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
      </header>
      <Footer t={t} />
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}