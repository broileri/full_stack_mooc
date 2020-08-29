import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
    const [anecdoteWithMostVotes, setAnecdoteWithMostVotes] =  useState({ anecdote: anecdotes[0], votes: 0 });

    const getRandomAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const voteAnecdote = () => {
        const votesCopy = [...votes];
        votesCopy[selected]++;
        setVotes(votesCopy);

        if (votesCopy[selected] >= anecdoteWithMostVotes.votes) {
            setAnecdoteWithMostVotes({ anecdote: anecdotes[selected], votes: votesCopy[selected] });
        }
    };

    return (
        <div className="container">
            <div className="anecdote-container">
                <h1>Anecdote of the Day</h1>
                <div>
                    <p>
                        {props.anecdotes[selected]}
                    </p>
                    <p>Has {votes[selected]} votes</p>
                </div>
                <div className="button-container">
                    <button onClick={voteAnecdote}>Vote</button>
                    <button onClick={getRandomAnecdote}>Next anecdote</button>
                </div>
            </div>
            <div className="anecdote-container">
                <h1>Anecdote with Most Votes</h1>
                <div>
                    <p>{anecdoteWithMostVotes.anecdote}</p>
                    <p>Has {anecdoteWithMostVotes.votes} votes.</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)