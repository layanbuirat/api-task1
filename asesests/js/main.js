async function getUsers() {
    try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data = await response.json();

        const result = data.recipes.map(function (recipe) {
            return `
                <div class='user'>
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image_url}" alt="${recipe.title}" />
                </div>
            `;
        }).join('');

        document.querySelector(".users").innerHTML = result; // Changed ".user" to ".users"
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getUsers();
