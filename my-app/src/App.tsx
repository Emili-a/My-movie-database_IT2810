import React from 'react';
import MoviesPage from "./pages/MoviesPage";

/**
 * @description Component that displays moviesPage.
 */

const App: React.FC = () => {
  return (
    <div className='PageWrapper'>
      <MoviesPage />
    </div>
  );
}

export default App;
