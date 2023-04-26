
fetch('http://localhost:3000/Product')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data); 
})
.catch(error => {
  console.error('Error:', error);
});

  function toggleStarColor(event) {
    const currentColor = event.target.style.color;
  
    if (currentColor === 'orange') {
      event.target.style.color = ''; 
    } else {
      event.target.style.color = 'orange';
    }
  }
  
  const stars = document.querySelectorAll('.star i');
  
  stars.forEach(star => {
    star.addEventListener('click', toggleStarColor);
  });

  document.addEventListener('DOMContentLoaded', function() {

    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const commentInput = document.getElementById('comment-input');
      const comment = commentInput.value;

      
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentList.appendChild(commentElement);

      commentInput.value = '';
    });
  });

// document.getElementById("cartIcon").addEventListener("click", function() {
//     alert("Add this product to cart? ");
// });

function showAlertOnAllCartIcons() {
    const cartIcons = document.querySelectorAll(".fas.fa-shopping-cart");
    const remainingProducts = 5; // Change this to the actual number of products remaining
  
    cartIcons.forEach((cartIcon) => {
      cartIcon.addEventListener("click", () => {
        alert(`There are ${remainingProducts} products remaining.`);
      });
    });
  }