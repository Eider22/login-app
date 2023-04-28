import React, { useEffect, useState } from 'react'
import { getFreeGames } from '../services/api.service';

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
          <div class="container-fluid">
            <h1>Populares</h1>
            <div className="row">
              {games &&
                games.map((item) => {
                  return (
                    <div className="col">
                      <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={item.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text"><strong>Developed by:</strong> {item.developer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      );
}

