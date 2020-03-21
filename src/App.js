import React from 'react';
import './App.css';
import Person from "./components/person/Person";

class App extends React.Component {
    state = {
        persons: [
            {id: 1, name: 'Yann', age: 23},
            {id: 2, name: 'Doe', age: 17},
            {id: 3, name: 'Ariel', age: 13}
        ],
        
        showPersons: false
    };
    
    nameChange = (event, index) => {
        const personIndex = [...this.state.persons].findIndex(( person => person.id === index ));
        const person = {...this.state.persons[ personIndex ]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[ personIndex ] = person;
        
        this.setState({
            persons: persons
        })
    };
    
    togglePerson = () => {
        this.setState({showPersons: !this.state.showPersons})
    };
    
    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons})
    };
    
    render () {
        const styleButton = {
            backgroundColor: 'red',
            margin: 'auto 220px',
            height: '40px',
            borderStyle: 'solid'
        };
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <>
                    {this.state.persons.map((person, position) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                nameHandler={(event) => this.nameChange(event, person.id)}
                                valueName={person.name}
                                deleting={() => this.deletePersonHandler(position)}/>
                        );
                    })}
                </>
            );
        }
        
        return (
            <>
                {persons}
                <button
                    onClick={this.togglePerson}
                    style={{...styleButton}}
                >Feature Toggle
                </button>
            </>
        );
    }
}

export default App;
