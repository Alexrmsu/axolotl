import { Elysia } from 'elysia';
import {renderIndexPage, loadJavascript, loadStyles} from '../controllers/browserController';

export const setupRoutes = (app: Elysia) => {
    app.get('/', renderIndexPage);
    app.get('/browser', loadJavascript);
    app.get('/styles', loadStyles);
};