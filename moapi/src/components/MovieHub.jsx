import styles from '../App.module.css'
import { Routes,Route, Link, NavLink} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'



const MovieHub = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>
  {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

  return (

    <div className={styles.main}>
      {loading && <LoadingScreen/>}
    <div className={styles.cont}>
        <h1 className={styles.head}>Movie Hub</h1>
        The One Stop for Movies
    </div>
    <div className={styles.conts}>
      <p className={styles.breathe}>Select the type:</p>
      <div className={styles.buts}>
        <div className={styles.but}>
          <NavLink to='/NowPlaying'><button>Now Playing</button></NavLink>
          <hr className={styles.line} />            
        </div>
        <div className={styles.but}>
          <NavLink to='/Popular'><button>Popular</button></NavLink>
          <hr className={styles.line} />
        </div>
        <div className={styles.but}>
          <NavLink to='/TopRated'><button>Top Rated</button></NavLink>
          <hr className={styles.line} />
        </div>
        <div className={styles.but}>
          <NavLink to='/Upcoming'><button>Upcoming</button></NavLink>
          <hr className={styles.line} />
        </div>
      </div>
    </div>
  </div>

  )
}

export default MovieHub
