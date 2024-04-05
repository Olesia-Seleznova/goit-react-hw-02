import PropTypes from "prop-types";

import css from "../Feedback/Feedback.module.css";

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <>
      <p className={css.p}>Good: {good}</p>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Total: {totalFeedback}</p>
      <p className={css.p}>Positive: {positiveFeedback}</p>
    </>
  );
}

Feedback.propTypes = {
  values: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
