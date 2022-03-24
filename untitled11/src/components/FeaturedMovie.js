import React, {useEffect, useState} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

export default ({item}) => {

    const firstDate = new Date(item.release_date);
    let genres = [];
    for(let x in item.genres){
        genres.push(item.genres[x].name)
    }

    function ellipsis(item, number){
            let ellipsis = item.split("").slice(0,(number + 1));
            ellipsis.push("...");
            return ellipsis.join("")
    }

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_title && item.original_title.length > 29 ? ellipsis(item.original_title, 29) : item.original_title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} points</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">5 seasons</div>
                    </div>
                    <div className="featured--description">{item.overview && item.overview.length > 270 ? ellipsis(item.overview, 270) : item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">
                            <PlayArrowIcon style={{fontSize: 33}}/>
                            <span>Watch</span>
                        </a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
                            <AddIcon style={{fontSize: 33}}/>
                            <span>My List</span>
                        </a>
                    </div>
                    <div className="featured--genres"><strong>Genres:</strong> {genres.join(', ')}</div>
                </div>

            </div>
        </section>
    )
}



















