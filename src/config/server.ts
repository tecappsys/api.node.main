import express, { Application } from 'express';
import expressConfig from '../config/expressConfig';

class Server {

    private app: Application;
    private port: number;

    constructor() {
        this.app  = express();
        this.port = parseInt(process.env.PORT);        
        this.middlewares();
        const expressApp = new expressConfig(this.app);
        expressApp;
    }

    middlewares() {
        this.app.use(express.json());
    }

    listen() {
        // this.app.listen( this.port,"0.0.0.0", () => {
        //     console.log(`SERVIDOR CORRIENDO EN PUERTO ${this.port}`);
        // })
        this.app.listen( this.port, () => {
            console.log(`SERVIDOR CORRIENDO EN PUERTO ${this.port}`);
        })
    }

}

export default Server;