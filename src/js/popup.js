const openBtn = document.querySelector('.catalog-btn');
const closeBtn = document.querySelector('.modal-close-btn');
const popup = document.querySelector('.popup-is-hidden');
const data = {
  name: "Tube Watch S42 Date Steel With Black Case",
  elements: null
}
function change() {
  if (data.elements === null) {
    data.elements = document.querySelector(".catalog-list-item-picture").innerHTML;
  }
  console.log(data)
  document.body.classList.toggle('no-scroll');
  popup.classList.toggle('popup-is-hidden');
}

openBtn.addEventListener('click', change);
closeBtn.addEventListener('click', change);

const catalog = document.querySelector('.catalog-list');
catalog.addEventListener('click', event => {
  if (!event.target.matches('.catalog-list-item-p')) return;
  const parent = event.target.closest('.catalog-list-item');
  const parentPicture = document.querySelector('.card-buy-watch');
  parentPicture.querySelector('picture').textContent = '';
  parentPicture
    .querySelector('picture')
    .insertAdjacentHTML('afterbegin', clearClasses(parent));
  document.querySelector('.modal-watch-name').textContent =
    event.target.textContent.trim();
  document.querySelector('.modal-watch-price').textContent = parent
    .querySelector('span.catalog-list-item-span')
    .textContent.trim();
  data.name = event.target.textContent.trim();
  data.elements = clearClasses(parent);
  change();
});

const saleProduct = document.querySelector('.sale-block-title');
saleProduct.addEventListener('click', event => {
  const parentPicture = document.querySelector('.card-buy-watch');

  const parent = document.querySelector('.sale-list-item');

  parentPicture.querySelector('picture').textContent = '';

  parentPicture
    .querySelector('picture')
    .insertAdjacentHTML('afterbegin', clearClasses(parent));

  document.querySelector('.modal-watch-name').textContent =
    event.target.textContent.trim();
  document.querySelector('.modal-watch-price').textContent = '€700';
  document
    .querySelector('.modal-watch-price')
    .insertAdjacentHTML(
      'beforeend',
      `<span class="modal-watch-sale">€1000</span>`
    );
  data.name = event.target.textContent.trim();
  data.elements = clearClasses(parent);
  change();
});

function clearClasses(element) {
  const string =
    element.querySelector('div>div>picture')?.innerHTML ??
    element.querySelector('div>picture').innerHTML;
  return string
    .replace(`class="catalog-list-item-picture"`, '')
    .replace(`class="catalog-list-item-img"`, '');
}
const SubmitBtn = document.querySelector(".modal-submit-btn");
const submitModal = document.querySelector(".submit-is-hidden");
function modalSubmit() {
  document.body.classList.toggle("no-scroll");
  submitModal.classList.toggle("submit-is-hidden");
}

SubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  submitModal.querySelector(".submit-name").textContent = data.name;
  submitModal.querySelector(".submit-picture").textContent = "";
  submitModal.querySelector('.submit-picture')
    .insertAdjacentHTML('afterbegin', data.elements);
  change()
  modalSubmit();
});

submitModal.addEventListener("click", event => {
  if (event.target.matches('.submit-wrapper>button.modal-close-btn') &&
    !event.target.matches(".submit-wrapper>button.submit-button") ||
    !event.target.matches('.submit-wrapper>button.modal-close-btn') &&
    event.target.matches(".submit-wrapper>button.submit-button")) return;
  modalSubmit();
})