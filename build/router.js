
const homepage = '<h1>homepage</h1>';
const contact = '<h1>contact</h1>';


const routes = {
    '/build/' : homepage,
    '/' : homepage,
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
