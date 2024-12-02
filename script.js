
function isWorkingHours() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
}
const pages = {
    home: `
        <h1>Welcome to our site ❤️</h1>
        <p>Nous sommes ravis de vous accueillir 🤗.</p>
    `,
    services: `
        <h1>Our Services 👇</h1>
        <p>Discover our services accessible to your needs 🤯.</p>
    `,
    contact: `
        <h1>Contact Us 👇</h1>
        <p>You can contact us via mail at : contact.us@gmail.com 💯🎯✔️</p>
    `
};
function loadPage(page) {
    const content = document.getElementById('content');
    if (isWorkingHours()) {
        content.innerHTML = pages[page] || '<h1>Page non trouvée</h1>';
    } else {
        content.innerHTML = `
            <h1>Site is locked !!!</h1>
            <p>This site is only accessible from Monday to Friday, from 9AM to 5PM</p>
        `;
    }
}
window.onload = () => loadPage('home');
