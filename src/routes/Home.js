import { useEffect, useState } from 'react';
import Movie from '../components/MainMovie';

function Home({ genre }) {
    //state
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // function
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=download_count`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    // useEffect
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            {loading ? (
                <h1>Loading..</h1>
            ) : (
                <div className='movies'>
                    <div className='movies-wrap'>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;