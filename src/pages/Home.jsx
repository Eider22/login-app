import React, { useEffect, useState } from 'react'
import { getFreeGames } from '../services/api.service';
import CardComponent from '../components/home/CardComponent';

export const Home = () => {
    const [games, setGames] = useState([]);

    const getGamesFromService = async() => {
        const data = await getFreeGames();
        console.log("desde el componente", data);
        setGames(data);
    }

    useEffect(() => {
      getGamesFromService();
    }, [])
    

    return (
        <>
          <div className="container-fluid">
            <h1>Populares</h1>
            <div className="row">
              {games &&
                games.map((item) => {
                 return <CardComponent item={item} key={item.id}/>                  
                })}
            </div>
          </div>
        </>
      );
}

