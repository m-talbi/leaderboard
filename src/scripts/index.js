import initializeScoreApp from './modules/formHandler.js';

const scoreForm = document.querySelector('form');
const scoreTable = document.querySelector('tbody');
const refreshBtn = document.getElementById('refresh-list-btn');

const scoreList = JSON.parse(localStorage.getItem('leaderboard')) || [];

initializeScoreApp(scoreForm, refreshBtn, scoreTable, scoreList);