import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Function to extract routes from App.tsx
function extractRoutesFromApp() {
  const appContent = fs.readFileSync(toAbsolute('src/App.tsx'), 'utf-8')
  
  // Extract all Route path attributes
  const routeMatches = appContent.match(/<Route\s+path="([^"]+)"/g)
  
  if (!routeMatches) return ['/']
  
  const routes = routeMatches
    .map(match => {
      const pathMatch = match.match(/path="([^"]+)"/)
      return pathMatch ? pathMatch[1] : null
    })
    .filter(Boolean)
    .filter(route => !route.includes(':') && route !== '*') // Exclude dynamic routes and catch-all
    .sort() // Sort for consistent ordering
  
  return [...new Set(routes)] // Remove duplicates
}

// Function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const routesToPrerender = extractRoutesFromApp()

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = url === '/' 
        ? toAbsolute('dist/index.html')
        : toAbsolute(`dist${url}.html`)
      
      // Ensure the directory exists before writing
      ensureDirectoryExists(filePath)
      
      fs.writeFileSync(filePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error.message)
    }
  }
})()