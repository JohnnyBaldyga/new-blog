// Dependencies
const dlTheme = document.querySelector('#dlTheme');
const container = document.querySelector('.container');

document.getElementById('dlTheme').addEventListener('change', function() {
  document.body.classList.toggle('dark-theme', this.checked);
});
// 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('blog-form form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const title = document.getElementById('blog-title').value;
      const content = document.getElementById('blog-content').value;

      if ( username && title && content) {
          const posts = JSON.parse(localStorage.getItem('posts')) || [];
          posts.push({ username, title, content });
          localStorage.setItem('posts', JSON.stringify(posts));

          form.reset();
          alert('Blog post added!');
          window.location.href = 'posts.html';
      } else {
          alert('Please fill in both fields.');
      }
  });
});

