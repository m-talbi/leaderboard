const LEADERBOARD_API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_NAME = 'Kweeka leaderboard';

export const createNewGameAsync = async () => {
  try {
    const response = await fetch(`${LEADERBOARD_API}/games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: GAME_NAME,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const game = await response.json();
    const gameId = game.result.match(/[a-zA-Z0-9]{20}/).join('');
    localStorage.setItem('leaderboardId', JSON.stringify(gameId));

    return {
      result: 'Football scores Leaderboard is created successfully',
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const addScoreAsync = async (score) => {
  try {
    const gameId = JSON.parse(localStorage.getItem('leaderboardId'));

    const response = await fetch(`${LEADERBOARD_API}/games/${gameId}/scores`, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.json();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const getScoresAsync = async () => {
  try {
    const gameId = JSON.parse(localStorage.getItem('leaderboardId'));
    const respone = await fetch(`${LEADERBOARD_API}/games/${gameId}/scores`);
    return await respone.json();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};