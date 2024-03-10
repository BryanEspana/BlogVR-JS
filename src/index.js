import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './routes/postRoutes.js';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const logRequests = (req, res, next) => {
  const { method, url, body } = req;
  const start = Date.now();
  
  const originalSend = res.send.bind(res);
  res.send = (body) => {
      const end = Date.now();
      const duration = end - start;
      const logMessage = `${new Date().toISOString()} - ${method} ${url} - Request Body: ${JSON.stringify(req.body)} - Response Body: ${body} - Duration: ${duration}ms\n`;
      
      // Escribir en el archivo log.txt
      fs.appendFile(path.join(__dirname, 'log.txt'), logMessage, err => {
          if (err) console.log('Error logging request:', err);
      });
      
      originalSend(body);
  };
  
  next();
};



const app = express();
app.use(cors());

app.use(express.json());
app.use(logRequests);
app.use('/posts', postRoutes);

//Implementar swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de la API de BlogVR',
      version: '1.0.0',
      description: 'Esta es la documentación de la API para BlogVR.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desarrollo',
      },
    ],
  },
  apis: ['./src/routes/postRoutes.js'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((req, res, next) => {
  const error = new Error(`El método ${req.method} no está implementado para ${req.originalUrl}`);
  error.status = 501; 
  next(error); 
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    error: error.status ? undefined : error,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "El endpoint solicitado no existe."
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));



export default app;
