import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import KhsRouter from './components/KhsRouter';
import './assets/styles/common.scss';
import './assets/styles/reset.css';
import './assets/styles/common.css';

export default function App() {
  return (
    <>
      <Router>
        <main>
          <KhsRouter />
        </main>
      </Router>
    </>
  );
}
