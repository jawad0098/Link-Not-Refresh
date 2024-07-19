
const links = document.querySelectorAll('.nav ul li a');

const contentContainer = document.getElementById('content-container');

links.forEach(link => link.addEventListener('click', async (event) => {
    event.preventDefault();
    const page = link.getAttribute('href');
    try {
        const response = await fetch(page);
        const content = await response.text();
        contentContainer.innerHTML = content;
    } catch (error) {
        contentContainer.innerHTML = '<span>Error loading page</span>';
    }
}));

