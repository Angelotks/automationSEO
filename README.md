# Mi Proyecto de Automatización con Node.js

Este proyecto incluye tres scripts de automatización para trabajar con URLs:

1. **Obtener FriendlyURLs a través de Liferay**: Este script recorre una lista de URLs y extrae sus FriendlyURLs usando Liferay.
2. **Obtener Meta Robots de URLs**: Este script recopila la información de meta robots de una lista de URLs.
3. **Obtener href de Canonical URLs**: Este script recopila la información de href de URLs canónicas a partir de una lista de URLs.

## Prerrequisitos

- Node.js v18.16.0 o superior
- Puppeteer

## Instalación

Clona este repositorio en tu máquina local usando `git clone`.

```bash
git clone [url-del-repositorio]
```

### Instalar Dependencias

Navega hasta el directorio del proyecto y ejecuta el siguiente comando:

```bash
npm install
```

## Uso

## Archivos de Entrada

Cada script utiliza un archivo de texto en la carpeta `dependencies` que contiene una lista de URLs para procesar.

- `urlFriendly.txt` para `friendlyUrl.js`
- `urlMetarobots.txt` para `metaRobots.js`
- `urlCanonical.txt` para `canonicalHref.js`

Asegúrate de que estos archivos estén actualizados con las URLs que deseas analizar.

### Obtener FriendlyURLs a través de Liferay

```bash
node friendlyUrl.js
```

### Obtener Meta Robots de URLs

```bash
node metaRobots.js
```

### Obtener href de Canonical URLs

```bash
node canonicalHref.js
```
