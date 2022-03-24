import {React, useEffect, useState} from "react";
import Tmdb from "./Tmdb.js";
import "./App.css"
import "./components/MovieRow.css";
import MovieRow from "./components/MovieRow.js";
import FeaturedMovie from "./components/FeaturedMovie.js";
import "./components/FeaturedMovie.css";
import Header from "./components/Header.js";
import "./components/Header.css";
import LoadGif from "./Netflix_LoadTime.gif";

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [black, setBlack] = useState(false);
    const [stateLoad, setStateLoad] = useState(true);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista TOTAL
            let list = await Tmdb.getHomeList().then((resolve) => {
                setStateLoad(false);
                return resolve
            });
            setMovieList(list);

            // Pegando o Featured
            let trending = list.filter(i => i.slug === 'trending');
            let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1));
            let chosen = trending[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
            setFeaturedData(chosenInfo);

        }
        function Opacity() {
            {window.scrollY > 10 ? setBlack(true) : setBlack(false)}
        }
        window.addEventListener('scroll', Opacity)
        loadAll();

        return () => {
            window.removeEventListener('scroll', Opacity)
        };
    },[])

    return (
        <div>
            {stateLoad ?
                (<div className="loading">
                    <img src={LoadGif} alt="Loading"/>
                </div>)
                :
                (
                <div className="page">
                    <Header black={black}/>
                    <FeaturedMovie item={featuredData}/>
                    <section className="lists">
                    {movieList.map((item,index) =>(
                        <MovieRow title={item.title} item={item.items} key={index}/>
                    ))}
                    </section>
                    <footer>
                        Made by Dayan de Oliveira<br/>
                        Image rights for Netflix<br/>
                        Data taken from Themoviedb.org website
                    </footer>
                </div>
                )
            }
        </div>
    )
}





























