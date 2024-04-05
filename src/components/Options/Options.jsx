import PropTypes from "prop-types";
import css from "../Options/Options.module.css";

export default function Options({ onUpdateFeedback, resetFeedbacks }) {
  return (
    <>
      <button className={css.button} onClick={() => onUpdateFeedback("good")}>
        Good
      </button>
      <button
        className={css.button}
        onClick={() => onUpdateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdateFeedback("bad")}>
        Bad
      </button>

      <button className={css.button} onClick={resetFeedbacks}>
        Reset
      </button>
    </>
  );
}

Options.propTypes = {
  onUpdateFeedback: PropTypes.func,
};
