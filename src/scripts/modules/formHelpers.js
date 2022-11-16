export const appendScoreEl = (scoreContainer, scoreObj) => {
  const scoreEl = `
    <tr>
      <td>
        ${scoreObj.user} : ${scoreObj.score}
      </td>
    </tr>
  `;
  scoreContainer.insertAdjacentHTML('beforeend', scoreEl);
};

export const refreshList = async (scoreContainer, scoreList) => {
  scoreContainer.innerHTML = '';
  scoreList.forEach((score) => {
    appendScoreEl(scoreContainer, score);
  });
};