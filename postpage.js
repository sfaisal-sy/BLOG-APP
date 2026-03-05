let postInput = document.getElementById('post'); // Renamed for clarity
let submitBtn = document.getElementById('submit-btn');
let tbody = document.getElementById('tbody');
postInput.focus();
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

        let tdEdit = document.createElement('td');
        tdEdit.className = 'text-center'
        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary ';
        editBtn.textContent = 'Edit';

        editBtn.addEventListener('click', () => {
            // 1. Ask the user for the new content
            let newValue = prompt("Edit your post:", eachPost);

            // 2. Validate that it's not null (user clicked cancel) or empty
            if (newValue !== null && newValue.trim() !== "") {
                // 3. Update the array at the current index
                posts[index] = newValue.trim();

                // 4. Update LocalStorage and Sync UI
                localStorage.setItem('allPosts', JSON.stringify(posts));
                renderPosts();
            }
        });
        tdEdit.appendChild(editBtn);

        let tdDelete = document.createElement('td');
        tdDelete.className = 'text-center';
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this post?")) {
                // 1. Remove the item from the array
                posts.splice(index, 1);

                // 2. Update LocalStorage and Sync UI
                localStorage.setItem('allPosts', JSON.stringify(posts));
                renderPosts();
            }
        });
        tdDelete.appendChild(deleteBtn);

        tr.append(tdSr, tdPost, tdEdit, tdDelete);
        tbody.appendChild(tr);
    });
}

// Initial render call so data appears on page load
renderPosts();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let postValue = postInput.value.trim();

    if (postValue !== "") {
        // Add to array
        posts.push(postValue);

        // Save to LocalStorage
        localStorage.setItem('allPosts', JSON.stringify(posts));

        // Re-render the table
        renderPosts();

        // Clear the input field
        postInput.value = '';
        postInput.focus();
    }
});


