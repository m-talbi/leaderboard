export const showSpinner = (scoreContainer) => {
  scoreContainer.innerHTML = '';
  const spinnerEl = `
  <tr id="table-spinner" class="spinner">
    <td>
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </td>
  </tr>
  `;
  scoreContainer.insertAdjacentHTML('beforeend', spinnerEl);
};

export const hideSpinner = (scoreContainer) => {
  const spinnerEl = scoreContainer.querySelector('#table-spinner');
  spinnerEl.remove();
};