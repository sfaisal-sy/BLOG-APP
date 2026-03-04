
let tbody = document.getElementById('tbody');

// Initialize posts from LocalStorage
const posts = JSON.parse(localStorage.getItem('allPosts')) || [];

// Function to handle the actual rendering
function renderPosts() {
    // 1. Clear the table body to prevent duplicates
    tbody.innerHTML = '';

    // 2. Loop and create elements
    posts.forEach((eachPost, index) => {

        let tr = document.createElement('tr');

        let tdSr = document.createElement('td');
        tdSr.textContent = index + 1; // Start counting from 1 for users

        let tdPost = document.createElement('td');
        tdPost.textContent = eachPost;       

        tr.append(tdSr, tdPost, );
        tbody.appendChild(tr);
    });
}

// Initial render call so data appears on page load
renderPosts();



