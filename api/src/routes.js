import { Router } from "express";
import ErrorHandler from "./Middleware/ErrorHandler.js";
import NotFound from "./Middleware/NotFound.js";

import authController from "./Controller/authController.js";
import jobController from "./Controller/jobController.js";

class Routes  {
    constructor() {
        this.routes = Router();
        this.ApplicationRoutes();
    }

    ApplicationRoutes() {
        this.routes.get('/test', (req,res)=> {  
            return res.status(200).json({number:10000})
        });
        // Auth Routes
        this.routes.post('/auth/register', authController.Register);
        // Job Routes
        this.routes.post('/jobs/create', jobController.CreateJob);
        this.routes.put('/jobs/:id', jobController.UpdateJob);
        this.routes.delete('/jobs/:id', jobController.DeleteJob);
        this.routes.use(NotFound);
        this.routes.use(ErrorHandler)
    }
}

export default new Routes().routes;