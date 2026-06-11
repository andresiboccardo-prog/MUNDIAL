# Quiniela Mundial 2026

## Instrucciones de despliegue en Vercel (5 minutos)

### Paso 1 — Sube el proyecto a GitHub
1. Ve a **github.com** → New repository → llámalo `quiniela-mundial`
2. Sube estos 4 archivos manteniendo la estructura de carpetas:
   ```
   quiniela-mundial/
   ├── api/
   │   └── quiniela.js
   ├── public/
   │   └── index.html
   ├── package.json
   └── vercel.json
   ```

### Paso 2 — Despliega en Vercel
1. Ve a **vercel.com** → Add New Project → importa tu repo de GitHub
2. Deja todo por defecto → pulsa **Deploy**
3. Espera ~1 minuto. Vercel te da una URL tipo `quiniela-mundial.vercel.app`

### Paso 3 — Crea la base de datos KV
1. En tu proyecto de Vercel → pestaña **Storage** → Create → **KV Database**
2. Llámala como quieras → Create & Continue → Accept
3. En la siguiente pantalla pulsa **Connect to Project** → selecciona tu proyecto → Connect
4. Ya está. Vercel inyecta automáticamente las variables de entorno necesarias.

### Paso 4 — Redespliega (obligatorio tras conectar KV)
1. En tu proyecto → Deployments → los tres puntos del último deploy → **Redeploy**
2. En ~30 segundos tienes la app funcionando con base de datos.

### Listo
Comparte la URL con tus amigos por WhatsApp. Cada uno pulsa "+ Unirme", pone su nombre y ya aparece en la tabla de todos.

La pestaña ⚙️ es para que el organizador introduzca los resultados reales — los puntos se actualizan para todos automáticamente.
