import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import "./App.css";

const getInitialFedbacks = () => {
  const savedFeedbacks = localStorage.getItem("fedbackCount");
  return savedFeedbacks !== null
    ? JSON.parse(savedFeedbacks)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [feedbacks, setFeedbacks] = useState(getInitialFedbacks);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("fedbackCount", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onResetFeedbacks={resetFeedbacks}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
