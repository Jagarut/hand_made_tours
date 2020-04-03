import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "../../css/day.module.css";

const Day = ({ question, answer }) => {
  const [showInfo, setInfo] = useState(false);
  const toggleInfo = () => setInfo(!showInfo);
  return (
    <article className={styles.day}>
      <h4>
        {question}
        <button onClick={toggleInfo} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{answer}</p>}
    </article>
  );
};

export default Day;
