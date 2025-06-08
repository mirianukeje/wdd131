document.addEventListener("DOMContentLoaded", function () {
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount) : 0;
  reviewCount += 1;
  localStorage.setItem('reviewCount', reviewCount);

  const reviewCountEl = document.getElementById('reviewCount');
  if (reviewCountEl) {
    reviewCountEl.textContent = `You have submitted ${reviewCount} review${reviewCount === 0 ? '' : 's'} so far!`;
  }
});
