import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

import MoviesPage from "./pages/MoviesPage";
import './styles/MoviesPage.css';
import { useState } from 'react';
import { Results } from "./components/Results";
import SearchBar from "./components/SearchBar";

test("Site rendering", () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviesPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Search bar loading', () => {
  render(<MoviesPage />);
  expect(MoviesPage.contains(<SearchBar />)).toBe(true)
});

