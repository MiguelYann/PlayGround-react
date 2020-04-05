import React, {useState} from 'react';
import '../styles/App.css';
import CharComponent from "./CharComponent";
import Validation from "./Validation";

function AppString () {
    const title = 'Manage Input user';
    const [userInput, setUserInput] = useState('');
    
    const inputHandler = (event) => {
        setUserInput(event.target.value);
    };
    
    const deleteHandler = (index) => {
        const tabChar = [...userInput.split('')];
        tabChar.splice(index, 1);
        setUserInput(tabChar.join(''));
    };
    
    return (
        <div className="App">
            <h1 style={{color: "blue"}}>{title}</h1>
            <p>{userInput.length}</p>
            <input type="text" onChange={inputHandler} value={userInput}/>
            <Validation sizeText={userInput.length}/>
            {userInput.split('').map((char, index) => {
                return (
                    <CharComponent
                        key={index}
                        charEnter={char}
                        deleteChar={() => deleteHandler(index)}
                    /> );
            })}
        </div>
    );
}

export default AppString;

