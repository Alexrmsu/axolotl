import { join } from 'path';
import { readFileSync } from 'fs';

const PUBLIC_PATH = join(__dirname, '..', '..', 'public');


export const renderIndexPage = () => {
    const html = readFileSync(join(PUBLIC_PATH, 'index.html'), 'utf-8');
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
};


export const loadJavascript = () => {
    const js = readFileSync(join(PUBLIC_PATH, 'browserSniffer.js'), 'utf-8');
    return new Response(js, { headers: { 'Content-Type': 'application/javascript' } });
}


export const loadStyles = () => {
    const css = readFileSync(join(PUBLIC_PATH, 'styles.css'), 'utf-8');
    return new Response(css, { headers: { 'Content-Type': 'text/css' } });
}