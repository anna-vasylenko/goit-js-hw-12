import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderMarkup } from './js/render-functions';
import { getImages } from './js/pixabay-api';

export const refs = {
  formSearchEl: document.querySelector('.form-search'),
  galleryListEl: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.formSearchEl.addEventListener('submit', onFormSearch);

async function onFormSearch(e) {
  e.preventDefault();

  let userValue = refs.formSearchEl.elements.search.value.trim();

  if (!userValue) return;

  refs.galleryListEl.innerHTML = '';

  try {
    refs.loader.classList.remove('loader-hidden');
    const data = await getImages(userValue);
    if (data.hits.length === 0) {
      showErrorNoImageMessage();
    }

    refs.galleryListEl.innerHTML = renderMarkup(data.hits);
    gallery.refresh();
  } catch (error) {
    showErrorMessage(error);
  }

  refs.loader.classList.add('loader-hidden');
  refs.formSearchEl.elements.search.value = '';
}

function showErrorNoImageMessage() {
  return iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    position: 'topRight',
    progressBarColor: '#fafafb',
  });
}

function showErrorMessage(error) {
  return iziToast.error({
    message: `Error: ${error.message}`,
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    position: 'topRight',
    progressBarColor: '#fafafb',
  });
}

const gallery = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
