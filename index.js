// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const get = (greet) => (name) => console.log(`hello ${greet} to ${name}`);

get('Good afternoon')('mahediali');
