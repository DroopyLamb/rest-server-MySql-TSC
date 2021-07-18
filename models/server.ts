import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.middlewares();
        this.routes();
    }

    // Paths de las rutas
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    middlewares() {
        // Cors
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
        // Carpeta publica
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port: ${this.port}`);
        });
    }
}

export default Server;