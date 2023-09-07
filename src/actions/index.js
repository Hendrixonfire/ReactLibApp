export const increment = (num) =>{
    return {
        type: 'INCREMENT',
        payload: num
    }
}


export const decrement = (num) =>{
    return {
        type: 'DECREMENT',
        payload: num
    }
}

export const SET_DARK_THEME ="SET_DARK_THEME"
export const GOT_THEME = "https://www.nawpic.com/media/2020/game-of-thrones-nawpic-8.jpg"

export const setTheme = (theme) =>(dispatch)=>{
    dispatch({
        type: 'SET_DARK_THEME',
        payload: theme
    })
    dispatch({
        type: 'GOT_THEME',
        payload: theme
    })
}