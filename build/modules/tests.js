export async function load_tests() {
    return fetch('/build/pages/tests.html').then(data => data.text());
};