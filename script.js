function fetchSimsonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function(response) {
            return response.data[0]; // response.data instead of response.json() with fetch
        })
        .then(function(simson) {
            console.log('data decoded from JSON:', simson);

            // Build a block of HTML
            const simsonHtml = `
        <p><strong>${simson.character}</strong></p>
        <p>${simson.quote}</p>
        <img src="${simson.image}" />
      `;
            document.querySelector('#simson').innerHTML = simsonHtml;
        });
}

fetchSimsonJSON();

document.getElementById("myBtn").addEventListener("click", function() {
    fetchSimsonJSON();
});