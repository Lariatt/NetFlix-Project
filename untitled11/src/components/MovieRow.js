import React, {useState}  from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default ({title,item}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = item.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)

    }
    return (
        <div>
            <h2 className="movieRow--title">{title}</h2>
            <div className="movieRow">
                    <div className="movieRow--left">
                        <span onClick={handleLeftArrow}>
                        <ArrowBackIosNewIcon style={{fontSize: 50}}/>
                        </span>
                    </div>
                    <div className="movieRow--right">
                        <span onClick={handleRightArrow}>
                        <ArrowForwardIosIcon style={{fontSize: 50}} />
                        </span>
                    </div>
                    <div className="movieRow--listarea">
                        <div className="movieRow--list" style={{
                            marginLeft: scrollX,
                            width: item.results.length * 200
                        }}>
                            {item.results.map((item,index) => (
                                <div className="movieRow--item" key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

























