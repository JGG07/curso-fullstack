import {useState} from "react";


const Button = ({handleClick, text}) => (
    console.log(handleClick, text),
        <button onClick={handleClick}>{text}</button>
)

const Stadistics = ({text, stadistics}) => (
    console.log(text, stadistics),
        <tr>
            <td>{text}</td>
            <td>{stadistics}</td>
        </tr>
)


const All = ({good, neutral, bad}) => (
    console.log(good, neutral, bad),
        <tr>
            <td>All</td>
            <td>{good + neutral + bad}</td>
        </tr>
)


const Promedio = ({good, neutral, bad}) => (
    console.log(good, neutral, bad),
        <tr>
            <td>Promedio</td>
            <td>{(good + neutral + bad) / 3}</td>
        </tr>
)


const Porcentaje = ({good, neutral, bad}) => (
    console.log(good, neutral, bad),
        <tr>
            <td>Porcentaje</td>
            <td>{good * 100 / (good + neutral + bad)}%</td>
        </tr>
)

const Feedback = ({ allClicks, good, neutral, bad }) => {
    console.log(allClicks, good, neutral, bad)

    if (allClicks.length === 0) {
        return <p>No feedback given</p>
    }

    return (
        <table>
            <tr>
                <Stadistics text="Good! :)" stadistics={good}/>
                <Stadistics text="Neutral :P" stadistics={neutral}/>
                <Stadistics text="Bad :(" stadistics={bad}/>
                <All good={good} neutral={neutral} bad={bad}/>
                <Promedio good={good} neutral={neutral} bad={bad}/>
                <Porcentaje good={good} neutral={neutral} bad={bad} />
            </tr>
        </table>
    )
}

const Anecdotario = ({handleClick, text}) => {
    console.log('Anecdotario', handleClick, text)

    return(
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}

const App = () => {

    const [allClicks, setAll] = useState([])

    const [good, setGood] = useState(0);
    const setToGood = (newValue) => {
        console.log('good now',setGood)
        setAll(newValue)
        setGood(newValue)
    }

    const [neutral, setNeutral] = useState(0);
    const setToNeutral = (newValue) => {
        console.log('neutral',setNeutral)
        setAll(newValue)
        setNeutral(newValue)
    }

    const [bad, setBad] = useState(0);
    const setToBad = (newValue) => {
        console.log('bad', setBad)
        setAll(newValue)
        setBad(newValue)
    }

    const [selected, setSelected] = useState(0)
    const setToSelect = (newValue) => {
        console.log('Random number:' , newValue)
        setSelected(newValue)
    }

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <h1>Give feedback!</h1>
            <Button handleClick={() => setToGood(good + 1)} text="¡Good!"/>
            <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral"/>
            <Button handleClick={() => setToBad(bad + 1)} text="¡Bad!"/>
            <h1>stadistics!</h1>
            <Feedback allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>
            <p>{anecdotes[selected]}</p>
            <p>
                <strong>Votes: </strong> {votes[selected]}
            </p>
            <button onClick={handleVote}>Vote!</button>
            <Anecdotario handleClick={() => setToSelect(Math.floor(Math.random() * 8))} text='Siguiente Anecdota'/>
            <h2>Anécdota con más votos</h2>
            {votes.some((vote) => vote > 0) ? (
                <p>
                    {anecdotes[votes.indexOf(Math.max(...votes))]} <br />
                    <strong>Votes: </strong> {Math.max(...votes)}
                </p>
            ) : (
                <p>No votes yet!</p>
            )}
        </div>
    )
}

export default App
