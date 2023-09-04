
import React, {useState} from 'react';
import Home from "./Home";
import BookFull from './bookFull';
import{Link} from 'react-router-dom'


import './App.css';
import { matchPath, matchRoutes, useParams } from 'react-router-dom';

function BookWithFullDescription(params){
    const { id } = useParams();
 

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
         backgoundImageURL: 'https://getwallpapers.com/wallpaper/full/7/7/b/69302.jpg',
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
         backgoundImageURL: 'https://i.pinimg.com/originals/70/4b/18/704b18ff1733153c5a3f06b79b3ac139.jpg',
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
         backgoundImageURL: 'https://www.nawpic.com/media/2020/game-of-thrones-nawpic-8.jpg',
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
         backgoundImageURL: 'https://www.nawpic.com/media/2020/game-of-thrones-nawpic-8.jpg',
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
         backgoundImageURL: 'https://www.nawpic.com/media/2020/game-of-thrones-nawpic-8.jpg',
         description: "HBO's hit series A GAME OF THRONES is based on George R R Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A Feast for Crows is the fourth volume in the series. On the morning after battle, the crows had feasted on victors and vanquished alike. How much can a crown be worth, when a crow can dine upon a king? A Lannister sits upon the Iron Throne. But the days of betrayal and bloodshed are far from over.Among the ashes of war, new conflicts spark to life. Daring new plots and dangerous new alliances are formed which threaten to engulf Westeros. But in this game of thrones, victory will go to those with the sharpest steel and the coldest hearts." 
        }
      ])
      const book = books.find((b) =>  b.id == id);
   
    return(
        <div className='fullBookBodyDiv' style={{backgroundImage: `url(${book.backgoundImageURL})`}}>
        <Link to="/">
        <svg className='homeLinkImage' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 512 512">
<path fill="#E04F5F" d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"></path><path fill="#FFF" d="M408.1,206.8l-150.1-74.9c-1.3-0.6-2.7-0.6-4,0l-150.2,74.9c-1.7,0.8-2.7,2.4-2.7,4.3v29.6c0,1.6,0.8,3.1,2.2,4c1.4,0.9,3.1,1,4.5,0.3l148.2-74l148.1,74c0.6,0.3,1.3,0.5,2,0.5c0.9,0,1.8-0.2,2.5-0.7c1.4-0.9,2.2-2.4,2.2-4V211C410.8,209.2,409.8,207.5,408.1,206.8z"></path><path fill="#FFF" d="M380.5 245.8L256 183.8 131.5 245.8 131.5 360.8 200.5 360.8 200.5 272.6 248 272.6 248 360.8 380.5 360.8z"></path><path fill="#EA4949" d="M263.7 272.6H295.7V304.6H263.7z"></path>
</svg>
        </Link>
        <div className="fullBookContainer">
        
         
              <BookFull name={book.name}
               author={book.author}
               pages={book.pages}
               image={book.image}
               publisher={book.publisher}
               series={book.series}
               language={book.language}
               cicle={book.cicle}
               id={book.id}
               ISBN={book.ISBN}
               mass={book.mass}
               format={book.format}
               description={book.description}
                 />
          
       
              
        </div>
        </div>
    )
              
              }
export default BookWithFullDescription;