// const stars = document.querySelectorAll(".star i");

//     // Add event listener to each star
//     stars.forEach(star => {
//         star.addEventListener("click", () => {
//             // Change color of clicked star
//             star.style.color = "yellow";
//         });
//     });
    const stars = document.querySelectorAll('.fas fa-star');
         for(const star of stars) {
            star.addEventListener('click', () => {
                // Change color of clicked star to red
                star.style.color = 'red';
            });

         }
    // Add event listener to each star icon
    // stars.forEach(star => {
    //     star.addEventListener('click', () => {
    //         // Change color of clicked star to red
    //         star.style.color = 'red';
    //     });
    // });
    // function createFilmList(films) {
    //     const filmList = document.querySelector('.film.item');
    //     filmList.textContent = '';
    //     for (const film of films) {
    //       const li = document.createElement("li");
    //       li.innerText = film.title;
    //       li.className = 'film item';
    //       li.addEventListener('click', () => {
    //       // Update the list of films displayed based on the clicked film
    //         displayFilmDetails(film);
    //       });
    //       filmList.appendChild(li);
    //     }
    //   }
    //    createFilmList(films);
    