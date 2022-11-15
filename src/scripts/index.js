import initializeScoreApp from './modules/formHandler.js';

const scoreForm = document.querySelector('form');
const scoreTable = document.querySelector('tbody');
const clearBtn = document.getElementById('clear-list-btn');

const scoreList = JSON.parse(localStorage.getItem('leaderboard')) || [];

initializeScoreApp(scoreForm, clearBtn, scoreTable, scoreList);