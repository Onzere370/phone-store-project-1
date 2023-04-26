
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

  $("#comment-form").submit(function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the comment input value
    let comment = $("#comment-input").val();

    // Append the comment to the comment list
    $("#comment-list").append("<p>" + comment + "</p>");

    // Clear the comment input
    $("#comment-input").val("");
  });