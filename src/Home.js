import React, {useState} from 'react';
import './App.css';
import Book from './book'
import MyCounter from './counterComp';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {

    const [books, setBooks] = useState([
      {name: 'Game of thrones',
       author: 'J.R.R. Martin',
       pages: '804', 
       image:"https://img4.labirint.ru/rc/344f17b9d8349c0c64dabe025d4e6f7a/363x561q80/books80/795134/cover.jpg?1618331108",
       publisher: "Harper Voyager, 2011.",
       series: "Song of Ice and Fire",
       language: "English",
       cicle: "A Song of Ice and Fire. 7 books",
       id: 795134,
       ISBN: "9780007428540",
       mass: '538 g',
       format: '197x130x43 мм',
       backgoundImageURL: 'https://coolwallpapers.me/picsup/5737742-game-thrones-wallpapers.jpg',
       description: "HBO s hit series A Game of Thrones is based on George R. R. Martin s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series.Kings and queens, knights and renegades, liars, lords and honest men... all will play the GAME OF THRONES.Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where a 700-foot wall of ice protects the kingdom from the dark forces that lie beyond. The Game of Thrones. You win, or you die.Book One of A Song of Ice and Fire begins the greatest fantasy epic of the modern age.Winter is coming... "
      },
      {name: 'A Clash of Kings',
       author: 'J.R.R. Martin',
       pages: '916',
       image:"https://img4.labirint.ru/rc/b17efb91785c37045a7642f0a139ccc5/363x561q80/books70/692514/cover.jpg?1564202179",
       publisher: "Harper Voyager, 2014.",
       series: "Song of Ice and Fire",
       language: "English",
       cicle: "A Song of Ice and Fire. 7 books",
       id: 692514,
       ISBN:  "978-0-00-754824-8",
       mass: '624 g',
       format: '200x130x50 мм',
       backgoundImageURL: 'https://getwallpapers.com/wallpaper/full/7/7/b/69302.jpg',
       description: "HBO's hit series A Game of Thrones is based on George R R Martin's internationally bestselling series A Song of Ice And Fire, the greatest fantasy epic of the modern age. A Clash of Kings is the second volume in the series.`Characters so venomous they could eat the Borgias' Guardian`Tears: the woman's weapon, my lady mother used to call them. The man's weapon is a sword. And that tells us all you need to know . . . `Throughout Westeros, the cold winds are rising.From the ancient citadel of Dragonstone to the forbidding lands of Winterfell, chaos reigns as pretenders to the Iron Throne of the Seven Kingdoms stake their claims through tempest, turmoil and war.Five factions struggle for control of a divided land. Against a backdrop of incest, fratricide, alchemy and murder, the price of glory is measured in blood."
      },
      {name: 'A Feast for Crows',
       author: 'J.R.R. Martin',
       pages: '852',
       image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155",
       publisher: "Harper Voyager, 2014.",
       series: "Song of Ice and Fire",
       language: "English",
       cicle: "A Song of Ice and Fire. 7 books",
       id: 814021,
       ISBN: "9780007548279",
       mass: '584 g',
       format: '197x129x49мм',
       backgoundImageURL: 'https://images.wallpapersden.com/image/download/game-of-thrones-jon-snow-alone-fight_bW1ua2eUmZqaraWkpJRqZmdlrWZpaWU.jpg',
       description: "HBO's hit series A GAME OF THRONES is based on George R R Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A Feast for Crows is the fourth volume in the series. On the morning after battle, the crows had feasted on victors and vanquished alike. How much can a crown be worth, when a crow can dine upon a king? A Lannister sits upon the Iron Throne. But the days of betrayal and bloodshed are far from over.Among the ashes of war, new conflicts spark to life. Daring new plots and dangerous new alliances are formed which threaten to engulf Westeros. But in this game of thrones, victory will go to those with the sharpest steel and the coldest hearts." 
      },
      {name: 'A Feast for Crows',
       author: 'J.R.R. Martin',
       pages: '852',
       image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155",
       publisher: "Harper Voyager, 2014.",
       series: "Song of Ice and Fire",
       language: "English",
       cicle: "A Song of Ice and Fire. 7 books",
       id: 814021,
       ISBN: "9780007548279",
       mass: '584 g',
       format: '197x129x49мм',
       backgoundImageURL: 'https://images.wallpapersden.com/image/download/game-of-thrones-jon-snow-alone-fight_bW1ua2eUmZqaraWkpJRqZmdlrWZpaWU.jpg',
       description: "HBO's hit series A GAME OF THRONES is based on George R R Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A Feast for Crows is the fourth volume in the series. On the morning after battle, the crows had feasted on victors and vanquished alike. How much can a crown be worth, when a crow can dine upon a king? A Lannister sits upon the Iron Throne. But the days of betrayal and bloodshed are far from over.Among the ashes of war, new conflicts spark to life. Daring new plots and dangerous new alliances are formed which threaten to engulf Westeros. But in this game of thrones, victory will go to those with the sharpest steel and the coldest hearts." 
      },
      {name: 'A Feast for Crows',
       author: 'J.R.R. Martin',
       pages: '852',
       image:"https://img3.labirint.ru/rc/26a55efd54c098baf8886c367e9080f3/363x561q80/books82/814021/cover.jpg?1627828155",
       publisher: "Harper Voyager, 2014.",
       series: "Song of Ice and Fire",
       language: "English",
       cicle: "A Song of Ice and Fire. 7 books",
       id: 814021,
       ISBN: "9780007548279",
       mass: '584 g',
       format: '197x129x49мм',
       backgoundImageURL: 'https://images.wallpapersden.com/image/download/game-of-thrones-jon-snow-alone-fight_bW1ua2eUmZqaraWkpJRqZmdlrWZpaWU.jpg',
       description: "HBO's hit series A GAME OF THRONES is based on George R R Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A Feast for Crows is the fourth volume in the series. On the morning after battle, the crows had feasted on victors and vanquished alike. How much can a crown be worth, when a crow can dine upon a king? A Lannister sits upon the Iron Throne. But the days of betrayal and bloodshed are far from over.Among the ashes of war, new conflicts spark to life. Daring new plots and dangerous new alliances are formed which threaten to engulf Westeros. But in this game of thrones, victory will go to those with the sharpest steel and the coldest hearts." 
      }
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

     const counter  = useSelector(state =>{
      return state.counter
     })
    
      return (
      
        <div>
          <h1>Book Library App React</h1>
          <MyCounter/>
          <div className="searchContainer">
          <label className='labelClass'>
          Find a book by name: <input className="userSearchInput" placeholder="Enter a book name" type="text" onChange={getData} />
          </label>
      
          </div>
        
        <div className="searchDropContainer">
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
        
             { (counter > 0) ? 
                 books.filter(book=>{ 
                  if (userInputData === '' && value ==='') {return book
                 } else if (value && userInputData === '') {return book.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())}
                 else {return book.name.toLocaleLowerCase().includes(userInputData)}
                 
                }).slice(0, counter).map(book =>(
                 (
                    <Link to={`bookdescription/${book.id}`} style={{ linkstyle: 'none', color: 'wheat'}}>
                    <Book  name={book.name} author={book.author} pages={book.pages} image={book.image}/>
                    </Link>   
                 )
                  
                   
                  
               
               ))
              : '' }
           
           </div>
           
        </div>
    
      );
    }
    
    /*
    (userInputData === '' && value ==='') ? book : book.name.toLowerCase().includes(userInputData)
    */
    export default Home;
    