import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './components/Overview';
import { Events } from './components/Events';
import { EventDetail } from './components/EventDetail';
import { Reviews } from './components/Reviews';
import { Updates } from './components/Updates';
import { People } from './components/People';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/people" element={<People />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
