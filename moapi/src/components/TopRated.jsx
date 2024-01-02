import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import LoadingScreen from './LoadingScreen'
import { Link } from 'react-router-dom'

const TopRated = () => {

    let [movies,setMovies] = useState([])
    let [count, setCount] = useState(1)
    let [error, setError] = useState([])

    useEffect(()=>{
        async function getMovies(){
            try{
                const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${count}`,{ headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY1ZjFlODJjZmYxMjA0MDUyYjU2NDEyOThkNjViNiIsInN1YiI6IjY1OGIwYmRkYmRkNTY4NWFiYjM4YWVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BHXFdsCLssPIni678VR5QO08Jza4g6uxvl3odgqZLqo'
                    
                  }})
                console.log(res);
                setMovies(res.data.results)
            } catch(error){
                console.log(error);
                setError(error)
            }
        }

        getMovies()
    },[count])



    function handleNext(){
        let y = count +1
        setCount(y)
    }

    function handleBack(){
        if(count<=1){
            setCount(1)
        }else{
            let t = count -1
            setCount(t)
        }
    }

    
  const [loading, setLoading] = useState(true)

  useEffect(()=>
  {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

    console.log(movies);
  return (
    <div>
        {loading && <LoadingScreen/>}
        <div className={style.container}>
            <div className={style.headerw}>    
                <h1>Top Rated Movies</h1>
                <div className={style.foot}>
                    <div>
                        <button onClick={()=>handleBack()}>Back Page</button>
                    </div>
                    <div className={style.cout}>
                        {count}
                    </div>
                    <div>
                        <button onClick={handleNext}>Next Page</button>
                    </div>
                </div>
                <div className={style.backBut}>
                    <Link to='/'><button>Back To Home</button></Link>
                </div>
            </div>
            <div className={style.movie}>
            {
                movies.map((item, index)=>{
                    return(
                        <div className={style.main} key={index}>
                            <div className={style.hi}>
                                <div className={style.images}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                </div>
                                <div className={style.everyTitle}>
                                    {item.title} 
                                </div>
                            </div>
                            <div className={style.rel}>
                                {item.release_date}
                            </div>
                            <div className={style.over}>
                                {item.overview}
                            </div>
                        </div>
                )
                })
            }
            </div>

            
        </div>
        <div>

        </div>
    </div>
  )
}

export default TopRated
