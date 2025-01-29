import {useState} from "react";
import Name from "./components/Name.jsx";
import Filter from "./components/Filter.jsx";
import NewContact from "./components/NewContact.jsx";
import Contacts from "./components/Contacts.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    console.log('Persons:', persons)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault();

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already in the phonebook`);
        } else if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already in the phonebook`);
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            };

            setPersons(persons.concat(nameObject));
            setNewName('');
            setNewNumber('');
        }
    }

    const personsToShow = filter
        ? persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase())
        )
        : persons

    return (
        <div>
            <h2>PhoneBook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h1>Add new contact</h1>
            <NewContact addName={addName}
                        newName={newName}
                        handleNameChange={handleNameChange}
                        newNumber={newNumber}
                        handleNumberChange={handleNumberChange}
            />
            <h2>Contacts</h2>
            <Contacts personsToShow={personsToShow} />
        </div>
    )
}

export default App
