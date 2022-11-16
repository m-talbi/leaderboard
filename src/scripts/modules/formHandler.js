import { refreshList } from './formHelpers.js';
import { addScoreAsync, createNewGameAsync, getScoresAsync } from './leaderboardService.js';
import { hideSpinner, showSpinner } from './spinner.js';

const initializeScoreApp = async (form, refreshListBtn, scoreContainer) => {
  showSpinner(scoreContainer);

  await createNewGameAsync();
  const scores = await getScoresAsync();

  hideSpinner(scoreContainer);
  refreshList(scoreContainer, scores.result);

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const scoreObj = {
      user: form['form-name'].value,
      score: form['form-score'].value,
    };

    form.reset();

    showSpinner(scoreContainer);
    await addScoreAsync(scoreObj);
    const scores = await getScoresAsync();

    hideSpinner(scoreContainer);
    refreshList(scoreContainer, scores.result);
  });

  refreshListBtn.addEventListener('click', async () => {
    showSpinner(scoreContainer);
    const scores = await getScoresAsync();
    hideSpinner(scoreContainer);
    refreshList(scoreContainer, scores.result);
  });
};

export default initializeScoreApp;