import css from './App.module.css';
import CafeInfo from '../cafeInfo/CafeInfo';
import { useState } from 'react';
import { type Votes, type VoteType } from '../../types/votes';
import VoteOptions from '../voteOptions/VoteOptions';
import VoteStats from '../voteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onReset={resetVotes} onVote={handleVote} canReset />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
}

export default App;
