import css from './App.module.css';
import CafeInfo from '../cafeInfo/CafeInfo';
import { useState } from 'react';
import { type VoteType } from '../../types/votes';

function App() {
  const [votes, setVotes] = useState();

  function handleVote(type: VoteType) {}

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;
