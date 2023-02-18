import './index.css';

const cookieMenu = document.querySelector('.cookie-consent');

if (localStorage.getItem('acceptedCookie')) {
  cookieMenu.style.display = 'none';
}

cookieMenu.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  console.log(event);
  if (button) {
    cookieMenu.style.display = 'none';
    localStorage.setItem('acceptedCookie', true);
  }
});
