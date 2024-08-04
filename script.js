// Add event listeners to all product cards for mouseover and mouseout events
document.querySelectorAll('.product-card').forEach(card => {
  
  // When the mouse is over a product card
  card.addEventListener('mouseover', () => {
    // Select all image containers within the current product card
    const imgContainers = card.querySelectorAll('.product-img');

    imgContainers.forEach(imgContainer => {
      // Check if the "Popular" tag already exists within the image container to avoid duplicates
      if (!imgContainer.querySelector('.tag')) {
        // Create a new "Popular" tag element
        const newTag = document.createElement('div');
        newTag.textContent = 'Popular'; // Set the text content of the tag
        newTag.className = 'tag'; // Assign the class 'tag' to the new element

        // Append the new tag to the image container
        imgContainer.appendChild(newTag);

        // Ensure the tag is visible
        newTag.style.display = 'block';
      }
    });
  });

  // When the mouse leaves a product card
  card.addEventListener('mouseout', () => {
    // Select all image containers within the current product card
    const imgContainers = card.querySelectorAll('.product-img');

    imgContainers.forEach(imgContainer => {
      // Find the "Popular" tag within the image container
      const tag = imgContainer.querySelector('.tag');
      if (tag) {
        // Remove the "Popular" tag from the image container
        imgContainer.removeChild(tag);
      }
    });
  });
});

// Function to filter product cards based on their availability
function filterProducts(filter) {
  // Select all product cards
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    if (filter === 'all') {
      // If the filter is 'all', display all product cards
      card.style.display = 'block';
    } else if (filter === 'available') {
      // If the filter is 'available', show only cards marked as available
      if (card.getAttribute('data-available') === 'true') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
