import { load_homepage } from './modules/homepage.js';

// const homepage = load_homepage();
const contact = '<h1>contact</h1>';

const routes = {
    '/build/' : load_homepage(),
    '/' : load_homepage(),
    '/contact' : contact,
  };

const rootDiv = document.getElementById('root');

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname, 
        window.location.origin + pathname
    );
    rootDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}

window.onNavigate = onNavigate;