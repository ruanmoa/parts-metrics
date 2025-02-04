import express from 'express';
import componentRoutes from './routes/componentRoutes.js';

const app = express();
/**
 * The port number on which the server will listen.
 * It is either taken from the environment variable `PORT` or defaults to 3000.
 * 
 * @constant {number}
 */
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/components', componentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
