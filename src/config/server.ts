import express, { Application } from 'express';
import expressConfig from '../config/expressConfig';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;        
        this.middlewares();
        const expressApp = new expressConfig(this.app);
        expressApp;
    }

    middlewares() {
        this.app.use(express.json());
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`SERVIDOR CORRIENDO EN PUERTO ${this.port}`);
        })
    }

}

export default Server;