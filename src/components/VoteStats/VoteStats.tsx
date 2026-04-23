import styles from "./VoteStats.module.css";

type Props = {
  good: number;
  neutral: number;
  bad: number;
};

function VoteStats({ good, neutral, bad }: Props) {
  const totalVotes = good + neutral + bad;
  const positiveRate = totalVotes ? Math.round((good / totalVotes) * 100) : 0;

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
