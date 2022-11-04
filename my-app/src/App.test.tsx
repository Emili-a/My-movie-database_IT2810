import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import MoviesPage from "./pages/MoviesPage";
import './styles/MoviesPage.css';
import { useState } from 'react';
import { Results } from "./components/Results";
import SearchBar from "./components/SearchBar";

test('Search bar loading as intended', () => {
  render(<MoviesPage />);
  expect(MoviesPage.find(SearchBar)).toBeInTheDocument();
});


