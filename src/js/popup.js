const openBtn = document.querySelector('.catalog-btn');
const closeBtn = document.querySelector('.modal-close-btn');
const popup = document.querySelector('.popup-is-hidden');

function change() {
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
