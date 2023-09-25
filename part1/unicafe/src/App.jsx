import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handler}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  if (props.total >= 1) {
    return (
      <div>
        {/* <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} /> */}
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{props.total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{props.average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{props.positive} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [average, setAverage] = useState(0);
  // const [positive, setPositive] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good * 100) / total;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={handleGood} />
      <Button text="neutral" handler={handleNeutral} />
      <Button text="bad" handler={handleBad} />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
