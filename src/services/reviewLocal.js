const getReviewFromLocal = () => JSON.parse(localStorage.getItem('review'));
const setReviewToLocal = (newReviews) => localStorage
  .setItem('review', JSON.stringify(newReviews));

const addReviewToLocal = (reviewProduct) => {
  if (!JSON.parse(localStorage.getItem('review'))) {
    localStorage.setItem('review', JSON.stringify([]));
  }
  if (reviewProduct) {
    const reviewStored = getReviewFromLocal();
    setReviewToLocal([...reviewStored, reviewProduct]);
  }
};

export default addReviewToLocal;
