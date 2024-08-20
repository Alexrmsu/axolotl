import { Elysia } from 'elysia';
import { renderIndexPage, loadJavascript } from '../controllers/browserController';

export const setupRoutes = (app: Elysia) => {
    app.get('/', renderIndexPage);
    app.get('/browser', loadJavascript);
};