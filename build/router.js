import { load_homepage } from './modules/homepage.js';
import { load_tests } from './modules/tests.js';


const routes = {
    '/build/' : load_homepage(),
    '/' : load_homepage(),
    '/build/tests/' : load_tests(),
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
document.onload = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}
window.onNavigate = onNavigate;