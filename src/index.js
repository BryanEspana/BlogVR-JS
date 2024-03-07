import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/posts', postRoutes);

app.use((req, res, next) => {
  const error = new Error(`El método ${req.method} no está implementado para ${req.originalUrl}`);
  error.status = 501; // Asigna el código de estado 501 al error
  next(error); // Pasa el error al manejador de errores
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    error: error.status ? undefined : error, // Omite la pila de errores en producción para errores no esperados
  });
});
// Después de todas las definiciones de rutas
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
