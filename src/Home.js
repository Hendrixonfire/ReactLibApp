import React, {useState} from 'react';
import './App.css';
import Book from './book'
import MyCounter from './counterComp';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch} from 'react-redux';
import { setTheme } from './actions';
import { GOT_THEME } from './actions';

import themeReducer from './reducers/theme';

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
    const {theme} = useSelector((state)=>state.themeReducer)
    const dispatch = useDispatch();
    const changeTheme = () =>{
      if (theme=='GOT_THEME'){
        dispatch(setTheme('SET_DARK_THEME'))
      } else {
        dispatch(setTheme('GOT_THEME'))
      }
    }
   
      return (
 <div className='homePageContainer' style={{backgroundImage:theme==="GOT_THEME" ? `url(${GOT_THEME})`: 'none'}}>
        <div>
          <div className='themeContainer'>
          <svg className="gotTheme" onClick={()=>changeTheme()} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 80 80">
          <path fill="#8bb7f0" d="M41.201,75.176c-2.659-0.926-6.677-2.324-6.701-9.178L34.498,65.5h-1.013l-0.139,0.271 c-2.164,4.202-5.539,5.344-6.846,5.636V63.5h-1.089l-0.121,0.327c-0.02,0.055-2.018,5.308-6.79,5.655V61.5h-1.047l-0.148,0.233 c-0.094,0.148-2.276,3.519-6.805,3.754v-7.951l-0.463-0.035c-0.063-0.004-6.021-0.504-9.167-5.06 c2.359-0.232,8.929-1.373,12.411-6.941H50.5v2.023c-1.261,0.121-2.411,0.704-3.424,1.737c-5.353,5.461-5.598,22.241-5.583,26.017 C41.398,75.244,41.301,75.21,41.201,75.176z"></path><path fill="#7496c4" d="M50,46v1.088c-1.203,0.215-2.303,0.826-3.281,1.823c-5.197,5.301-5.699,20.803-5.726,25.662 c-2.632-0.929-5.972-2.374-5.993-8.577L34.997,65H34h-0.209h-0.61l-0.279,0.542c-1.803,3.503-4.435,4.771-5.902,5.222V64v-1h-1 h-0.241h-0.698l-0.241,0.655c-0.018,0.05-1.739,4.606-5.821,5.265V62v-0.998L18.002,61l-0.272,0l-0.552,0.003l-0.295,0.463 c-0.085,0.133-1.983,3.039-5.883,3.479V58l-0.002-0.926l-0.923-0.071c-0.057-0.004-5.184-0.443-8.283-4.172 c2.867-0.418,8.509-1.86,11.762-6.831H50 M51,45H13c-4.047,6.798-13,7-13,7c3.167,5.5,10,6,10,6v8c5.222,0,7.728-4,7.728-4L18,62 v8c5.556,0,7.759-6,7.759-6H26v8c0,0,4.917-0.417,7.791-6H34c0.029,8.167,5.601,9.02,8,10c0,0-0.556-28,9-28V45L51,45z"></path><path fill="#8bb7f0" d="M45.201,65.176c-2.659-0.926-6.677-2.324-6.701-9.178L38.498,55.5h-0.98l-0.147,0.229 c-2.207,3.433-5.443,3.804-6.732,3.804c-0.048,0-0.095-0.001-0.138-0.002V51.5h-1.089l-0.121,0.327 c-0.02,0.055-2.018,5.308-6.79,5.655V49.5h-1.104l-0.129,0.307c-0.023,0.056-2.277,5.304-6.767,5.673v-7.969L14.011,47.5 c-0.076-0.002-7.239-0.21-10.482-4.75c2.389-0.303,9.242-1.642,12.752-7.25H52.5v9.024c-1.21,0.117-2.286,0.668-3.203,1.641 c-4.079,4.329-3.946,15.976-3.832,19.103C45.38,65.237,45.292,65.207,45.201,65.176z"></path><path fill="#7496c4" d="M52,36v8.089c-1.15,0.21-2.178,0.79-3.067,1.734c-3.932,4.173-4.079,14.773-3.988,18.734 c-2.624-0.93-5.924-2.395-5.945-8.56L38.997,55H38h-0.209h-0.546l-0.295,0.459c-1.889,2.939-4.574,3.489-5.95,3.564V52v-1h-1 h-0.241h-0.698l-0.241,0.655c-0.018,0.05-1.739,4.606-5.821,5.265V50v-0.998L22.002,49l-0.272,0l-0.667-0.001l-0.257,0.616 c-0.021,0.05-1.964,4.597-5.805,5.296V48v-0.98L14.02,47c-0.069-0.001-6.273-0.174-9.562-3.884 c2.923-0.497,8.807-2.097,12.096-7.116H52 M53,35H16c-4.047,6.798-13.333,7.333-13.333,7.333C5.833,47.833,14,48,14,48v8 c5.222,0,7.728-6,7.728-6L22,50v8c5.556,0,7.759-6,7.759-6H30v8c0,0,0.237,0.033,0.638,0.033c1.403,0,4.82-0.403,7.153-4.033H38 c0.029,8.167,5.601,9.02,8,10c0,0-1.25-21,7-21V35L53,35z"></path><path fill="#4e7ab5" d="M62.476 37.782L66 32 66 40zM60 40L60 32 54.667 37.333zM68 28L68 36 73.333 28zM62.083 22.75L62 32 67.317 23.796zM56 22L56 32 61.317 23.796z"></path><path fill="#8bb7f0" d="M51.429,55.225c-2.883-1.213-8.694-4.105-8.719-11.227L42.708,43.5h-0.98l-0.147,0.229 c-2.244,3.491-5.678,5.058-7.08,5.577V41.5h-1.089l-0.121,0.327c-0.02,0.055-2.018,5.308-6.79,5.655V39.5h-1.104l-0.129,0.307 c-0.023,0.056-2.277,5.304-6.767,5.673v-7.943l-0.463-0.035c-0.063-0.004-6.102-0.511-9.231-5.153 c2.309-0.517,9.458-2.547,12.957-8.425l0.07-0.118V21.5h28.333v4.655c-1.797,2.214-2.64,3.857-2.648,5.163 c-0.018,2.688,3.528,3.044,7.634,3.456l0.805,0.081C66.166,35.907,69.5,40.526,69.5,42c0,0.162-0.114,0.369-0.312,0.567 l-7.067,4.749C61.309,46.254,58.92,43.5,56,43.5c-1.06,0-1.96,0.407-2.678,1.211C51.082,47.221,51.27,53.045,51.429,55.225z"></path><path fill="#7496c4" d="M49.667,22v3.979c-1.796,2.239-2.639,3.941-2.648,5.336c-0.021,3.143,3.915,3.539,8.082,3.957 l0.805,0.082c9.958,1.025,13.094,5.478,13.095,6.629c-0.004,0.019-0.033,0.082-0.111,0.172l-6.667,4.49 C61.166,45.362,58.832,43,56,43c-1.191,0-2.246,0.477-3.051,1.378c-2.139,2.395-2.209,7.395-2.074,10.058 c-2.935-1.34-7.644-4.205-7.666-10.44L43.206,43h-0.997H42h-0.546l-0.295,0.459c-1.857,2.889-4.581,4.417-6.159,5.105V42v-1h-1 h-0.241h-0.698l-0.241,0.655c-0.018,0.05-1.739,4.606-5.821,5.265V40v-0.998L26.002,39l-0.272,0l-0.667-0.001l-0.257,0.616 c-0.021,0.05-1.964,4.597-5.805,5.296V38l-0.002-0.926l-0.923-0.071c-0.058-0.004-5.343-0.457-8.424-4.346 c2.898-0.753,9.264-2.973,12.542-8.479l0.141-0.236v-0.275V22H49.667 M50.667,21H21.333v2.667C17.286,30.465,8,32,8,32 c3.167,5.5,10,6,10,6v8c5.222,0,7.728-6,7.728-6L26,40v8c5.556,0,7.759-6,7.759-6H34v8c0,0,5-1.333,8-6h0.209 c0.029,8.167,7.392,11.02,9.791,12c0,0-1.362-12,4-12c3.314,0,6,4,6,4l7.541-5.079C69.806,42.656,70,42.335,70,42 c0-1.664-3.444-6.556-13.991-7.641c-4.308-0.444-8.006-0.654-7.99-3.038c0.008-1.139,0.789-2.722,2.648-4.988V21L50.667,21z"></path><path fill="#8bb7f0" d="M36.913,15.708c-1.558-0.339-3.143-0.511-4.712-0.511c-0.349,0-0.693,0.009-1.031,0.024 c-5.771-1.186-10.615-4.33-14.407-9.35C18.428,5.169,21.643,4.5,25.04,4.5c4.534,0,10.735,1.1,14.634,6.313v4.621 C39.169,15.521,38.199,15.662,36.913,15.708z"></path><path fill="#7496c4" d="M25.04,5c4.381,0,10.353,1.046,14.134,5.98v4.027c-0.519,0.076-1.279,0.163-2.216,0.199 c-1.573-0.337-3.173-0.508-4.756-0.508c-0.336,0-0.666,0.008-0.993,0.022c-5.415-1.128-9.997-4.025-13.636-8.617 C19.143,5.567,21.833,5,25.04,5 M25.04,4C20.941,4,17.401,4.914,16,5.683c4.702,6.486,10.428,9.087,15.131,10.042 c0.351-0.018,0.708-0.027,1.071-0.027c1.474,0,3.037,0.153,4.666,0.512c2.035-0.068,3.306-0.366,3.306-0.366v-5.197 C36.4,5.485,30.265,4,25.04,4L25.04,4z"></path><g><path fill="#c2e8ff" d="M36.5,25.5h-0.833l-0.146,0.146c-3.995,3.995-7.644,5.331-9.021,5.719v-7.867l-2.38,0.005 L22.001,23.5c-4.888-0.013-9.871-2.815-13.391-7.514C9.437,14.882,13.504,10.5,26,10.5h0.138l0.118-0.07 c2.975-1.77,9.844-1.844,17.116-1.923l1.158-0.01c2.26,0,4.647,0.16,7.096,0.477c7.426,0.959,7.743,3.848,7.878,5.081l0.052,0.475 l0.477-0.03c0.009-0.001,0.563-0.035,1.497-0.035c1.809,0,5.4,0.135,9.13,1.041c7.509,1.498,8.842,2.319,8.842,3.885 c0,1.191-1.099,1.774-2.057,2.149c-0.164,0.064-0.254,0.1-0.335,0.157c-1.158,0.836-1.809,2.906-2.498,5.098 C73.917,29,73.131,31.5,72,31.5c-2.537,0-4.295-1.314-6.157-2.706c-2.115-1.581-4.303-3.217-7.833-3.294l-0.39-0.004 c-1.96,0-6.855,0.306-9.958,3.135c-0.47,0.325-1.07,0.912-1.765,1.593c-2.065,2.022-5.147,5.041-9.398,5.264V25.5z"></path><path fill="#7496c4" d="M44.536,8.997c2.235,0,4.598,0.159,7.025,0.472c7.036,0.909,7.323,3.523,7.445,4.64l0.105,0.949 l0.953-0.06c0.005,0,0.555-0.034,1.467-0.034c1.786,0,5.332,0.133,9.051,1.035C77.784,17.436,79,18.206,79,19.39 c0,0.883-0.879,1.347-1.738,1.684c-0.182,0.072-0.314,0.123-0.446,0.218c-1.292,0.932-1.967,3.079-2.682,5.353 C73.621,28.274,72.764,31,72,31c-2.371,0-3.986-1.208-5.857-2.606c-2.077-1.553-4.431-3.313-8.121-3.393 c-0.123-0.003-0.257-0.004-0.399-0.004c-2.01,0-7.018,0.315-10.251,3.224c-0.539,0.389-1.136,0.973-1.823,1.646 c-2.037,1.995-4.767,4.669-8.549,5.08V26v-1h-1h-0.125H35.46l-0.293,0.293c-3.405,3.405-6.543,4.833-8.167,5.392V24v-1.004 L25.996,23c-0.001,0-0.694,0.003-1.876,0.003c-0.592,0-1.306-0.001-2.117-0.003c-4.625-0.013-9.347-2.618-12.756-7.005 C10.415,14.652,14.639,11,26,11h0.275l0.236-0.141c2.859-1.7,9.661-1.774,16.864-1.853L44.011,9 C44.185,8.998,44.36,8.997,44.536,8.997 M44.536,7.997C44.356,7.997,44.177,7.998,44,8c-7.788,0.086-14.823,0.111-18,2 c-14.778,0-18,6-18,6c4.117,5.677,9.608,7.988,14,8c0.812,0.002,1.527,0.003,2.12,0.003C25.305,24.003,26,24,26,24v8 c0,0,4.625-0.75,9.875-6H36v10c6.167,0,9.934-5.55,12-7c2.853-2.602,7.399-3.004,9.623-3.004c0.134,0,0.26,0.001,0.377,0.004 c6.531,0.142,8.416,6,14,6c2.708,0,3.112-8.246,5.4-9.897c0.194-0.14,2.6-0.726,2.6-2.713s-1.673-2.865-9.224-4.371 c-3.729-0.905-7.296-1.055-9.246-1.055C60.568,13.964,60,14,60,14c-0.155-1.408-0.63-4.53-8.311-5.522 C49.103,8.144,46.722,7.997,44.536,7.997L44.536,7.997z"></path></g><g><path fill="#8bb7f0" d="M19.849,17.508c-0.956,0-1.844-0.178-2.652-0.53c0.681-0.236,1.564-0.47,2.647-0.47 c0.926,0,1.879,0.175,2.846,0.52C21.974,17.264,20.964,17.508,19.849,17.508z"></path><path fill="#7496c4" d="M19.843,16.008c-1.845,0-3.146,0.636-3.843,0.887c1.274,0.839,2.626,1.113,3.85,1.113 c2.303,0,4.15-0.971,4.15-0.971C22.404,16.264,21.014,16.008,19.843,16.008L19.843,16.008z"></path></g><g><path fill="#4b6477" d="M52.004,15.5c-1.413-0.011-5.256-1.723-7.889-2.999H52c0.828,0,1.5,0.673,1.5,1.499 c0,0.4-0.155,0.777-0.436,1.061c-0.28,0.283-0.653,0.439-1.049,0.439H52.004z"></path><path fill="#36404d" d="M48.917,13c1.481,0,2.714,0,3.083,0.001c0.551,0,1,0.448,1,1c0,0.551-0.442,1-0.992,1 c-0.954-0.007-3.317-0.937-5.659-2L48.917,13 M48.917,12c-2.964,0-6.919,0.001-6.919,0.001S49.662,15.983,52,16 c0.005,0,0.01,0,0.015,0C53.113,16,54,15.1,54,14c0-1.105-0.895-2-2-2C51.633,12,50.399,12,48.917,12L48.917,12z"></path></g><g><path fill="#4b6477" d="M77.798,21.432c-0.495-1.703-2.705-3.77-5.019-5.547c5.405,1.111,6.405,2.179,6.575,2.618 c0.072,0.188,0.095,0.357,0.121,0.553C79.655,20.413,78.481,21.132,77.798,21.432z"></path><path fill="#36404d" d="M74.771,16.858c3.737,0.974,4.1,1.782,4.117,1.827c0.05,0.129,0.067,0.257,0.09,0.433l0.007,0.055 c0.1,0.754-0.408,1.256-0.919,1.565C77.554,19.615,76.453,18.319,74.771,16.858 M70.71,14.989c2.268,1.59,6.69,4.965,6.69,7.114 c0,0,0.055-0.014,0.15-0.044c0.593-0.188,2.692-1.027,2.427-3.017c-0.031-0.229-0.055-0.455-0.155-0.716l-0.001-0.003 C79.221,16.774,74.742,15.677,70.71,14.989L70.71,14.989z"></path></g>
          </svg>
          <span className='themeText'>Theme is set to: {theme}</span>
          </div>
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
    
          <div className="App" >
        
             { (counter > 0) ? 
                 books.filter(book=>{ 
                  if (userInputData === '' && value ==='') {return book
                 } else if (value && userInputData === '') {return book.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())}
                 else {return book.name.toLocaleLowerCase().includes(userInputData)}
                 
                }).slice(0, counter).map(book =>(
                 (
                    <Link to={`bookdescription/${book.id}`} style={{ linkstyle: 'none', color: 'wheat'}}>
                    <Book  name={book.name} author={book.author} pages={book.pages} image={book.image} />
                    </Link>   
                 )
                  
                   
                  
               
               ))
              : '' }
           
           </div>
           
        </div>
        </div>
      );
    }
    
    /*
    (userInputData === '' && value ==='') ? book : book.name.toLowerCase().includes(userInputData)
    */
    export default Home;
    