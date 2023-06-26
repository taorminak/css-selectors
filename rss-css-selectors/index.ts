import './styles.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import appContainer from './app/app.module';

hljs.registerLanguage('javascript', javascript);

const block1 = document.getElementById('block1') as HTMLElement;

block1.appendChild(appContainer.element);
