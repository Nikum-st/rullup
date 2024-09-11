import IMAGE_URL from './assets/image.png';
import "./index.css";

console.log('Hello World!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = IMAGE_URL;

document.body.append(h1);
document.body.append(img);
