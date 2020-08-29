import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ statistics }) => {
    const {good, neutral, bad} = statistics;

    return (
        <div>
            <h1>Statistics</h1>
            {
                (good || neutral || bad) ?
                    <table>
                        <tbody>
                            <StatisticsLine text={'Good'} value={good} />
                            <StatisticsLine text={'Neutral'} value={neutral} />
                            <StatisticsLine text={'Bad'} value={bad} />
                            <StatisticsLine text={'All'} value={good + bad + neutral} />
                            <StatisticsLine text={'Average'} value={(good + (bad * -1)) / (good + neutral + bad)} />
                            <StatisticsLine text={'Positive'} value={good / (good + bad + neutral) * 100 + ' %'} />
                        </tbody>
                    </table>:
                    <div>No feedback given.</div>
            }
        </div>
    );
};

const StatisticsLine = ({ text, value }) => {
    return (
        <tr><td>{text}:</td><td>{value}</td></tr>
    );
};

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addReview = (value, setState) => {
        setState(value + 1);
    };

    return (
        <div>
            <div>
                <h1>Give Feedback</h1>
                <div>
                    <Button text={'Good'} onClick={() => addReview(good, setGood)} />
                    <Button text={'Neutral'} onClick={() => addReview(neutral, setNeutral)} />
                    <Button text={'Bad'} onClick={() => addReview(bad, setBad)} />
                </div>
            </div>
            <Statistics statistics={{good, neutral, bad}} />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root')
);