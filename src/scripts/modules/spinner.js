const showSpinner = async (scoreContainer, callbackAsync) => {
  scoreContainer.innerHTML = '';
  const spinnerEl = `
  <tr id="table-spinner" class="spinner">
    <td>
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </td>
  </tr>
  `;
  scoreContainer.insertAdjacentHTML('beforeend', spinnerEl);

  await callbackAsync();
};

export default showSpinner;