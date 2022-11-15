export const appendScoreEl = (scoreContainer, scoreObj) => {
  const scoreEl = `
    <tr>
      <td>
        ${scoreObj.name} : ${scoreObj.score}
      </td>
    </tr>
  `;
  scoreContainer.insertAdjacentHTML('beforeend', scoreEl);
};

export const addScore = (scoreObj, scoreList) => {
  scoreList.push(scoreObj);
  localStorage.setItem('leaderboard', JSON.stringify(scoreList));
};

export const refreshList = (scoreContainer, scoreList) => {
  scoreContainer.innerHTML = '';
  scoreList.length = 0;
  localStorage.setItem('leaderboard', JSON.stringify(scoreList));
};