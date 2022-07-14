import React from 'react';
import './App.scss';
import { Header } from './component/Header';
import { PockemonList } from './component/PockemonList';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <PockemonList />
    </>
  );
};
