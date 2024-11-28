const btnSub = document.querySelector('.btn-sub');
const btnOk = document.querySelector('.btn-ok');
let popup = document.getElementById('popup');

btnSub.addEventListener('click', function () {
  openPopup();
});

btnOk.addEventListener('click', function () {
  closePopup();
});

function openPopup() {
  popup.classList.add('open-popup');
}

function closePopup() {
  popup.classList.remove('open-popup');
}
