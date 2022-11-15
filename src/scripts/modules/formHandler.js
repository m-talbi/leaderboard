import { addScore, appendScoreEl, refreshList } from './formHelpers.js';

const initializeScoreApp = (form, clearListBtn, scoreContainer, scoreList) => {
  scoreList.forEach((scoreObj) => {
    appendScoreEl(scoreContainer, scoreObj, scoreList);
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const scoreObj = {
      name: form['form-name'].value,
      score: form['form-score'].value,
    };

    addScore(scoreObj, scoreList);
    appendScoreEl(scoreContainer, scoreObj);
    form.reset();
  });

  clearListBtn.addEventListener('click', () => {
    refreshList(scoreContainer, scoreList);
  });
};

export default initializeScoreApp;