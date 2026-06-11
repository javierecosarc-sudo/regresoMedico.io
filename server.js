import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

app.use(express.static(join(__dirname, './')));

app.get('/api/config', (req, res) => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({
      error: 'Faltan variables de entorno SUPABASE_URL o SUPABASE_KEY en el servidor'
    });
  }

  res.json({
    SUPABASE_URL,
    SUPABASE_KEY
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  console.log('Asegúrate de definir SUPABASE_URL y SUPABASE_KEY en un archivo .env o en las variables de entorno.');
});
