import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './contexts/ProfileProvider';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/home/HomePage';
import AnimeCollectionPage from './pages/anime-collection/AnimeCollectionPage';
import AnimeDetailsPage from './pages/anime-details/AnimeDetailsPage';
import AboutAnime from './pages/about-anime/AboutAnime';
import Contact from './pages/contact/Contact';
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/anime-collection' element={
            <ProtectedRoute>
              <AnimeCollectionPage />
            </ProtectedRoute>} />
          <Route path='/anime/:id' element={<ProtectedRoute><AnimeDetailsPage /></ProtectedRoute>} />
          <Route path='/what-is-anime' element={<ProtectedRoute><AboutAnime /></ProtectedRoute>} />
          <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ProfileProvider>
  </StrictMode>,
);