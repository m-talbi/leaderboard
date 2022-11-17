import { refreshList } from './formHelpers.js';
import { addScoreAsync, createNewGameAsync, getScoresAsync } from './leaderboardService.js';
import showSpinner from './spinner.js';
import showSnackbar from './snackbar.js';

const initializeScoreApp = (form, refreshListBtn, scoreContainer) => {
  showSpinner(scoreContainer, async () => {
    const game = await createNewGameAsync();
    showSnackbar(game);
    refreshList(scoreContainer, []);
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const scoreObj = {
      user: form['form-name'].value,
      score: form['form-score'].value,
    };

    form.reset();

    showSpinner(scoreContainer, async () => {
      const response = await addScoreAsync(scoreObj);
      showSnackbar(response);
      const scores = await getScoresAsync();
      refreshList(scoreContainer, scores.result);
    });
  });

  refreshListBtn.addEventListener('click', () => {
    showSpinner(scoreContainer, async () => {
      const scores = await getScoresAsync();
      refreshList(scoreContainer, scores.result);
    });
  });
};

export default initializeScoreApp;