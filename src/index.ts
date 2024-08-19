import { Elysia } from "elysia";
import {setupRoutes} from "./routes/router";

const app = new Elysia();


setupRoutes(app);


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});