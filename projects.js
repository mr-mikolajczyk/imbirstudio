const portfolioItems = document.querySelectorAll('.home_portfolio_item');

portfolioItems.forEach(item => {
  const videoElement = item.querySelector('video'); // Target video element within item

  if (videoElement) { // Ensure video element exists
    item.addEventListener('mouseover', () => {
      portfolioItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.add('inactive');
        }
      });

      videoElement.play(); // Play video
    });

    item.addEventListener('mouseout', () => {
      portfolioItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('inactive');
        }
      });

      videoElement.pause(); // Pause video
    });
  } else {
    console.warn(`Video element not found in item: ${item}`);
  }
});
 
