document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get the selected category
            const selectedCategory = button.getAttribute('data-category');

            // Filter blog posts
            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');
                if (selectedCategory === 'all' || postCategory === selectedCategory) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});