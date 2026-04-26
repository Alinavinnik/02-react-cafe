import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: () => {};
  onReset: () => {};
  canReset: boolean;
}

function VoteOptions({ onReset, onVote, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onVote}>
        Good
      </button>
      <button className={css.button} onClick={onVote}>
        Neutral
      </button>
      <button className={css.button} onClick={onVote}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
