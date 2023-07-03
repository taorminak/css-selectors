import './styles.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript'; 
import { block1 } from './app/app.module';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);

const block = document.getElementById('block1') as HTMLElement;

block.appendChild(block1.element);
