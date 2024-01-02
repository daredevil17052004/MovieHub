import { Routes,Route} from 'react-router-dom'
import Nowplaying from './components/Nowplaying'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import MovieHub from './components/MovieHub'
import Movie from './components/Movie'
import LoadingScreen from './components/LoadingScreen'

function App() {

  return (
      <div>
        <Routes>
        <Route path='/' element={<MovieHub/>} />
        <Route path='/NowPlaying' element={<Nowplaying/>} />
        <Route path='/TopRated' element={<TopRated/>} />
        <Route path='/Popular' element={<Popular/>} />
        <Route path='/Upcoming' element={<Movie/>} />
      </Routes>    
    </div>
  )
}

export default App