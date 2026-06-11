# regresoMedico

Este proyecto es una aplicación de ingreso de pacientes que usa Supabase para almacenar datos.

## Conectar GitHub con Supabase

1. Crear un repositorio en GitHub.
2. En el proyecto local, añadir el remoto de GitHub:
   ```powershell
   git remote add origin <URL-del-repositorio>
   git branch -M main
   git push -u origin main
   ```
3. En GitHub, ve a `Settings > Secrets and variables > Actions` y agrega estos secretos:
   - `SUPABASE_ACCESS_TOKEN` — token de acceso personal de Supabase
   - `SUPABASE_PROJECT_REF` — el identificador de tu proyecto Supabase

4. Empujar cambios a `main` activará la acción `supabase-deploy`.

## Notas sobre el despliegue

- El workflow `supabase-deploy.yml` usa el Supabase CLI para desplegar los archivos del repositorio a Supabase Hosting.
- Si quieres usar Supabase solo como base de datos desde el navegador, también puedes desplegar el HTML estático y mantener la configuración del DB en el cliente.

## Ejecutar localmente

1. Copia `.env.example` a `.env`.
2. Completa:
   ```env
   SUPABASE_URL=https://TU_SUPABASE_URL.supabase.co
   SUPABASE_KEY=TU_SUPABASE_ANON_KEY
   PORT=3000
   ```
3. Ejecuta:
   ```powershell
   npm install
   npm start
   ```
4. Abre `http://localhost:3000`
