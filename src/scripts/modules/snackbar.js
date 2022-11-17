const body = document.querySelector('body');

const hideSnackbar = (snackbarEl) => {
  setTimeout(() => {
    snackbarEl.classList.add('hide_snackbar');
    setTimeout(() => {
      snackbarEl.remove();
    }, 300);
  }, 3000);
};

const hideSnackbarFast = (snackbarEl) => {
  snackbarEl.classList.add('hide_snackbar');
  setTimeout(() => {
    snackbarEl.remove();
  }, 300);
};

const showSnackbar = (res) => {
  const currentSnackbar = document.querySelector('.app_snackbar');
  if (currentSnackbar) hideSnackbarFast(currentSnackbar);

  const text = res.error ? res.error : res.result;

  const snackbar = `
    <div class="app_snackbar">
      <span class="snackbar_message">${text}</span>
      <span class="snackbar_dismiss" id="close-snackbar">DISMISS</span>
    </div>
  `;
  body.insertAdjacentHTML('afterbegin', snackbar);

  const closeBtn = document.getElementById('close-snackbar');
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.remove();
  });

  hideSnackbar(closeBtn.parentElement);
};

export default showSnackbar;