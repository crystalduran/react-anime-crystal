import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AnimeCollectionPage from './pages/anime-collection/AnimeCollectionPage';
import AnimeDetailsPage from './pages/anime-details/AnimeDetailsPage';
import { ProfileProvider } from './contexts/ProfileProvider';
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/anime-collection' element={<AnimeCollectionPage />} />
          <Route path="/anime/:id" element={<AnimeDetailsPage />} />
        </Routes>
      </Router>
    </ProfileProvider>
  </StrictMode>,
);