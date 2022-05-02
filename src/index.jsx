import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';

import { Home } from './templates/Home';
import { Footer } from './components/Footer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route
              path="/list/non-alcoholic"
              element={<Home which="non_alcoholic" index="a" />}
            />
            <Route
              path="/list/optional-alcohol"
              element={<Home which="optional_alcohol" index="a" />}
            />
            <Route path="/list/alcoholic" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
