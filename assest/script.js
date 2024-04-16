const reviewDisplay = document.getElementById("reviewDisplay");

let review = 1;

function incrementReview() {
  if (review < 100) {
    review++;
    reviewDisplay.textContent = review;
  }
}

setInterval(incrementReview, 20);
