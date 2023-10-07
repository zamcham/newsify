import React, { useEffect, useState } from "react";

const NflGames = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
    const apiUrl = `https://api-american-football.p.rapidapi.com/games?date=${currentDate}`;    
    const apiKey = 'b997029068msh97df7969583a023p1dbc1bjsn83d9384aa737';

    const [data, setData] = useState(null);
    
    //TODO: Make sure the API call only happens once per day
    // Check if cached data exists and is not older than 1 day
    const checkCachedData = () => {
        const cachedData = localStorage.getItem('nflGamesData');
        const cachedTimestamp = localStorage.getItem('nflGamesTimestamp');

        if (cachedData && cachedTimestamp) {
        const oneDayInMillis = 24 * 60 * 60 * 1000;
        const currentTime = new Date().getTime();

            if (currentTime - parseInt(cachedTimestamp) < oneDayInMillis) {
                setData(JSON.parse(cachedData));
                return; // Use cached data and skip API request
            }
        }
    };

  // Make the API request
    const makeApiRequest = async () => {
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    try {
      const response = await fetch(apiUrl, options);
      const result = await response.json();

      // Store the response and timestamp in local storage
      localStorage.setItem('nflGamesData', JSON.stringify(result));
      localStorage.setItem('nflGamesTimestamp', new Date().getTime().toString());

      setData(result);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        // Check cached data first
        checkCachedData();
    
        // If cached data is not available or too old, make the API request
        if (!data) {
          makeApiRequest();
          console.log(data);
        }
    }, []);
  

    return (
        <div>
            <h1>NFL Games</h1>
            <div className="game-cards">
                if (!data) {
                 <p>Loading...</p>
                }
                else
                {<p>Found Data</p>}
            </div>
        </div>
    );
}

export default NflGames;
