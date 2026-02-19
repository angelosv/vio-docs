# Guía de deploy - vio-docs

## Pasos restantes

### 1. Crear el repositorio en GitHub

Si tienes `gh` instalado y autenticado:

```bash
cd /Users/angelo/vio-docs
gh auth login   # si el token ha expirado
gh repo create vio-docs --public --source=. --remote=origin --push
```

O manualmente en [github.com/new](https://github.com/new):
- Nombre: **vio-docs**
- Visibilidad: Public
- No inicializar con README (ya existe)

Luego:

```bash
cd /Users/angelo/vio-docs
git remote add origin https://github.com/angelosv/vio-docs.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. **Add New** → **Project**
3. Importa el repo `vio-docs` desde GitHub
4. Framework preset: Next.js (auto-detectado)
5. Build command: `npm run build`
6. Deploy

### 3. Configurar dominio docs.vio.live

1. En Vercel: **Project Settings** → **Domains**
2. Añade `docs.vio.live`
3. Configura DNS en tu proveedor del dominio `vio.live`:
   - Tipo: **CNAME**
   - Nombre: `docs`
   - Valor: `cname.vercel-dns.com`

### Alternativa: Vercel CLI

```bash
npm i -g vercel
cd /Users/angelo/vio-docs
vercel
# Sigue las instrucciones para linkear el proyecto
vercel --prod
```

---

**Nota**: Si usas otro usuario de GitHub, actualiza `docsRepositoryBase` en:
- `theme.config.jsx`
- `app/layout.jsx`
