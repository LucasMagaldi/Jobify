import { Router } from "express";
import ErrorHandler from "./Middleware/ErrorHandler.js";
import NotFound from "./Middleware/NotFound.js";


class Routes  {
    constructor() {
        this.routes = Router();
        this.ApplicationRoutes();
    }

    ApplicationRoutes() {
        this.routes.get('/', (req,res)=> {  
            return res.status(200).json({number:10000})
        });

        this.routes.use(NotFound);
        this.routes.use(ErrorHandler)
    }
}

export default new Routes().routes;