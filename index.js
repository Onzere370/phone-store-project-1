
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


const cartIcons = document.querySelectorAll(".fa-shopping-cart");
cartIcons.forEach(function(icon) {
  icon.addEventListener("click", function() {
    alert("Product added to cart");
  });
});
