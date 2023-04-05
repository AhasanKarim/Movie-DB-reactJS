import {useState, useEffect}  from "react";

import  SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';


//ed82e57
const API_URL = 'http://www.omdbapi.com?apikey=ed82e57';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
        const searchMovies = async (title) =>{
            const response = await fetch(`${API_URL}&s={title}`);
            const data = await response.json();

            setMovies(data.Search);
        }
    
    useEffect (() => {
        searchMovies({API_URL});

    },[]);


    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
        
        <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt ='search magnifying icon' 
            onClick={() => searchMovies(searchTerm) }
        />
        

        </div>


        {movies?.length > 0? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>

                    ))}
                </div>

            ) : (
                
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )

        }



        
    </div>
        
    );
};




export default App;