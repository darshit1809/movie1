// script.js

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get movie title and year
    const title = document.getElementById('movieTitle').value;
    const year = document.getElementById('movieYear').value;

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${title} (${year})</span> <button class="remove-btn">Remove</button>`;

    // Append the new item to the movie list
    document.getElementById('movieList').appendChild(li);

    // Clear the input fields
    document.getElementById('movieTitle').value = '';
    document.getElementById('movieYear').value = '';

    // Add event listener to the remove button
    li.querySelector('.remove-btn').addEventListener('click', function() {
        li.remove();
    });
});