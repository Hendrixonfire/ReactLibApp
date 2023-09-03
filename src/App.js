import React, {useState} from 'react';
import './App.css';
import Book from './book'


function App() {
const [books, setBook] = useState([
  {name: 'Game of thrones', author: 'J.R.R. Martin', pages: '804', image:"https://img4.labirint.ru/rc/344f17b9d8349c0c64dabe025d4e6f7a/363x561q80/books80/795134/cover.jpg?1618331108"},
  {name: 'A Clash of Kings', author: 'J.R.R. Martin', pages: '916', image:"https://img4.labirint.ru/rc/b17efb91785c37045a7642f0a139ccc5/363x561q80/books70/692514/cover.jpg?1564202179"},
  {name: 'A Feast for Crows', author: 'J.R.R. Martin', pages: '852', image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155"},
  {name: 'A Feast for Crows', author: 'J.R.R. Martin', pages: '852', image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155"},
  {name: 'A Feast for Crows', author: 'J.R.R. Martin', pages: '852', image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155"}
])

const [userInputData, setUserInputData] = useState('');

const getInitialState = () => {
  const value = '';
  return value;
};
const [value, setValue] = useState(getInitialState);

function getData(val){
  setUserInputData(val.target.value.toLowerCase())
 
 }
 function getDropValue(e){
 setValue(e.target.value);
 
 }


  return (
   
    <div>
      <h1>Book Library App React</h1>
      <div className="searchContainer">
      <label className='labelClass'>
      Find a book by name: <input className="userSearchInput" placeholder="Enter a book name" type="text" onChange={getData} />
      </label>
      
      </div>
    
    <div class="searchDropContainer">
    <label for="books">Choose a book:</label>

    <select className='gridItem' name="books" value={value} onChange={getDropValue} selected="selected">
    <option value="" selected="selected" hidden="hidden">Choose here</option>
     {books.map(book=>(
    
      <option value={book.name}>{book.name}</option>
     ))}
    </select>
    <p> { userInputData ? 
      `Clear search input to choose from the DropBox!`
     : `You selected ${value}`}</p>
    </div>
      <div className="App">
    
         {
          books.filter(book=>{ 
           if (userInputData === '' && value ==='') {return book
          } else if (value && userInputData === '') {return book.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())}
          else {return book.name.toLocaleLowerCase().includes(userInputData)}
          
         }).map(book =>(
          <Book  name={book.name} author={book.author} pages={book.pages} image={book.image}/>
        ))}
        
     
       </div>
    </div>
  );
}

/*
(userInputData === '' && value ==='') ? book : book.name.toLowerCase().includes(userInputData)
*/
export default App;
