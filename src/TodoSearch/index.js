import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      
    <input
      className="TodoSearch"
      placeholder="Busca algo...  "    // &#x1F50D; deberia colocarle el icon?
      value={searchValue}
      onChange={onSearchValueChange}
    />

    </React.Fragment>
    
  );
}

export { TodoSearch };
