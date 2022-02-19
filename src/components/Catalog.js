import {useEffect, useState} from 'react'
import {data} from '../data/data'
import Movie from './Movie'
import './Catalog.css'

// const Catalog = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:3000/api/movies')
//         .then(response => response.json())
//         .then(json => setData(json))
//     }, [])
//     return (
//         <div>
//             <h1>Catalog</h1>
//             <div className="movies">
//                 {data.map((movie) => (
//                     <Movie image={movie.img} genre={movie.genre} name={movie.name}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

const Catalog = () => {
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="movies">
                {data.map((movie) => (
                    <Movie name={movie.name} genre={movie.genre} image={movie.img}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog