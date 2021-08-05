export async function load_homepage() {
    return fetch('/build/pages/homepage.html').then(data => data.text());
};