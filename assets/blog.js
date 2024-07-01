document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');

    function renderPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        blogList.innerHTML = '';
        posts.forEach((post) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'blog-post';
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            blogList.appendChild(postDiv);
        });
    }

    renderPosts();
});