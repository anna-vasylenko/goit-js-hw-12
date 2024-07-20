import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderMarkup } from './js/render-functions';
import { getImages } from './js/pixabay-api';

let page = 1;
let per_page = 15;
let userValue = '';
let totalPages = 1;

export const refs = {
  formSearchEl: document.querySelector('.form-search'),
  galleryListEl: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
  loadMoreBtnEl: document.querySelector('.btn-load-more'),
};

refs.formSearchEl.addEventListener('submit', onFormSearch);
refs.loadMoreBtnEl.addEventListener('click', onLoadMoreBtn);

async function onFormSearch(e) {
  e.preventDefault();

  userValue = refs.formSearchEl.elements.search.value.trim();

  if (!userValue) return;

  page = 1;
  refs.galleryListEl.innerHTML = '';
  hideBtnLoadMore();

  try {
    showLoader();
    const data = await getImages(userValue, page, per_page);
    if (data.hits.length === 0) {
      showErrorNoImageMessage();
    } else {
      totalPages = Math.ceil(data.totalHits / per_page);
      refs.galleryListEl.innerHTML = renderMarkup(data.hits);
      gallery.refresh();
      showBtnLoadMore();
    }
  } catch (error) {
    showErrorMessage(error);
  }

  hideLoader();
  refs.formSearchEl.elements.search.value = '';
}

async function onLoadMoreBtn() {
  page += 1;

  try {
    showLoader();
    if (page === totalPages) {
      showInfoMessage();
      hideBtnLoadMore();
    }
    const data = await getImages(userValue, page, per_page);
    const markup = renderMarkup(data.hits);
    refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();
    scrollWindow();
  } catch (error) {
    showErrorMessage(error);
  }
  hideLoader();
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

function showInfoMessage() {
  return iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    backgroundColor: '#0099FF',
    messageColor: '#fafafb',
    position: 'topRight',
    progressBarColor: '#fafafb',
  });
}

function showLoader() {
  refs.loader.classList.remove('loader-hidden');
}

function hideLoader() {
  refs.loader.classList.add('loader-hidden');
}

function showBtnLoadMore() {
  refs.loadMoreBtnEl.classList.remove('hidden');
}

function hideBtnLoadMore() {
  refs.loadMoreBtnEl.classList.add('hidden');
}

function scrollWindow() {
  const galleryItemEl = document.querySelector('.gallery-item');
  const galleryItemHeight = galleryItemEl.getBoundingClientRect().height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}

const gallery = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
