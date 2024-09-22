import styles from "./Options.module.css";

const Options = ({ feedbackUpdate, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.btn} onClick={() => feedbackUpdate("good")}>
        Good
      </button>
      <button className={styles.btn} onClick={() => feedbackUpdate("neutral")}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => feedbackUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
