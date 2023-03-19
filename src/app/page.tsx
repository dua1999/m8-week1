import Image from 'next/image';
import { Movie } from './types/movie';
import styles from './page.module.css';
import { text } from 'stream/consumers';
import SearchBar from './components/SearchBar';

const getMovies = async () => {
  const api = await fetch(
    'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json'
  );
  const movies = await api.json();
  return movies as Movie[];
};

export default async function Home() {
  const movies = await getMovies();
 
  return (
    <main className={styles.main}>
    <div>  <SearchBar /></div>
      <br />
      {movies.map((movie, index) => (
        <>
        
          <head>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Itim&family=Roboto:wght@300&display=swap');
            </style>
          </head>

          <div key={index}>
            <div className={styles.card}>
              <Image src={movie.image_url} alt={''} width={200} height={250} />
            </div>
            <div className={styles.container}>
              <b>{movie.name}</b>
              <br />
              <span style={{ color: '		rgb(191, 191, 191)' }}>{movie.year}</span>
              <br />
              Rating : {movie.rating}
            </div>
          </div>
        </>
      ))}
    </main>
  );
}
