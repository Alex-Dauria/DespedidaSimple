# Estructura Escalable para Despedida Simple

## Estructura Actual (no escalable)
```
/
├── index.html              ← Principal
├── cremacion-caba.html     ← Página local suelta
├── css/styles.css
├── js/main.js
└── (todo mezclado)
```

## Estructura Recomendada (escalable)
```
/
├── index.html                      ← Principal (Buenos Aires/AMBA)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── og-image.jpg            ← Default para compartir
│   │   ├── og-image-caba.jpg       ← Para CABA (opcional)
│   │   ├── urna.png
│   │   └── marmol.jpg
│   └── reviews/                    ← Renombrar "Reseñas" sin ñ
│       ├── AlanKlein.png
│       ├── FernandaPajaro.png
│       └── MatiasQuintela.png
├── zonas/                          ← TODAS las páginas locales
│   ├── caba.html
│   ├── zona-sur.html
│   ├── zona-norte.html
│   ├── zona-oeste.html
│   ├── la-matanza.html
│   ├── quilmes.html
│   ├── lomas-de-zamora.html
│   └── ...
├── sitemap.xml
├── robots.txt
└── site.webmanifest
```

## Por qué esta estructura

### 1. Carpeta `/zonas/`
- Todas las páginas locales en un solo lugar
- URLs limpias: `despedidasimple.com/zonas/caba.html`
- Fácil de mantener y agregar nuevas

### 2. Carpeta `/assets/`
- Imágenes separadas del código
- Evita caracteres especiales (ñ) en nombres de carpetas
- Fácil encontrar recursos

### 3. URLs alternativas (aún mejor)
Si querés URLs sin `.html`, podés usar carpetas:
```
/zonas/
├── caba/
│   └── index.html          → despedidasimple.com/zonas/caba/
├── zona-sur/
│   └── index.html          → despedidasimple.com/zonas/zona-sur/
└── la-matanza/
    └── index.html          → despedidasimple.com/zonas/la-matanza/
```

## Checklist para cada nueva zona

Al crear una página nueva (ej: `zona-sur.html`):

### Contenido único obligatorio:
- [ ] Title con nombre de zona
- [ ] Meta description mencionando ciudades específicas
- [ ] H1 con nombre de zona
- [ ] FAQs únicas (no copiar de otras páginas)
- [ ] Sección cobertura con ciudades de ESA zona
- [ ] Schema LocalBusiness con areaServed correcto
- [ ] Schema FAQPage sincronizado con FAQs

### Metadatos:
- [ ] Canonical apuntando a sí misma
- [ ] Hreflang apuntando a sí misma
- [ ] Geo tags con coordenadas de la zona
- [ ] og:url correcto

### Archivos a actualizar:
- [ ] sitemap.xml (agregar nueva URL)
- [ ] index.html (agregar link en cobertura y navbar)
- [ ] Todas las páginas de zonas (actualizar navbar si hay menú)

## Template base para nuevas zonas

Usar `cremacion-caba.html` como base y reemplazar:

1. `CABA` / `Capital Federal` → Nombre de la zona
2. Lista de barrios → Ciudades de esa zona  
3. Lista de hospitales → Hospitales de esa zona
4. Coordenadas en geo tags
5. FAQs con preguntas relevantes a esa zona
6. Schema con areaServed correcto

## OG-Images

Para cada zona, idealmente crear una imagen:
- **Tamaño**: 1200x630px
- **Formato**: JPG (más liviano) o PNG
- **Contenido sugerido**:
  - Logo Despedida Simple
  - "Cremación en [ZONA]"
  - "$570.000"
  - Fondo elegante/mármol

Herramientas gratuitas para crear:
- Canva.com (tiene template para OG images)
- Figma.com
- Photoshop/GIMP

Si no querés crear una por zona, usá la misma genérica para todas.
