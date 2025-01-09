// Function to display all jokes
function displayJokes() {
    fetch('/japi/jokes')
        .then(response => response.json())
        .then(data => {
            const jokeList = document.getElementById('joke-list');
            jokeList.innerHTML = '';

            data.forEach(joke => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    <strong>Question:</strong> ${joke.question}<br>
                    <strong>Answer:</strong> ${joke.answer}<br>
                    <strong>Rating:</strong> ${joke.rating}<br>
                    <button class="btn btn-sm btn-primary" onclick="editJoke(${joke.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteJoke(${joke.id})">Delete</button>
                `;
                jokeList.appendChild(listItem);
            });
        })
        .catch(error => console.log(error));
}
