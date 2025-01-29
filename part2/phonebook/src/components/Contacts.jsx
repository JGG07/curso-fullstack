import Name from "./Name.jsx";

// eslint-disable-next-line react/prop-types
const Contacts = ({personsToShow}) => {

    return (
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {personsToShow.map(person =>
                <Name key={person.id} person={person}/>
            )}
        </ul>
    )
}

export default Contacts
