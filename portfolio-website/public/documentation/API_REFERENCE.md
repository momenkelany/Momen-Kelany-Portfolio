
# API Reference

## Component Props

### Button Component
```jsx
<Button
  variant="default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size="default" | "sm" | "lg" | "icon"
  asChild={boolean}
  className={string}
  onClick={function}
>
  Button Text
</Button>
```

### Card Component
```jsx
<Card className={string}>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
  <CardFooter>
    Footer
  </CardFooter>
</Card>
```

### Badge Component
```jsx
<Badge 
  variant="default" | "secondary" | "destructive" | "outline"
  className={string}
>
  Badge Text
</Badge>
```

## Utility Functions

### Scroll Functions
```javascript
// Smooth scroll to section
scrollToSection(targetId)

// Parameters:
// targetId: string - CSS selector for target element

// Example:
scrollToSection('#about')
```

### Theme Functions
```javascript
// Toggle theme
toggleTheme()

// Set specific theme
setTheme('light' | 'dark' | 'system')

// Get current theme
getCurrentTheme()
```

### Form Validation
```javascript
// Email validation
validateEmail(email)

// Returns: boolean
// Example: validateEmail('user@example.com') // true

// Required field validation
validateRequired(value)

// Returns: boolean
// Example: validateRequired('') // false
```

## Hooks

### useTheme
```javascript
import { useTheme } from './contexts/ThemeContext'

const { theme, setTheme, toggleTheme } = useTheme()

// theme: 'light' | 'dark' | 'system'
// setTheme: (theme: string) => void
// toggleTheme: () => void
```

### useIsMobile
```javascript
import { useIsMobile } from './hooks/use-mobile'

const isMobile = useIsMobile()

// Returns: boolean
// True if viewport width < 768px
```

## Context APIs

### ThemeContext
```javascript
const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => {},
  toggleTheme: () => {}
})

// Provider props:
// children: ReactNode
// defaultTheme?: 'light' | 'dark' | 'system'
```

## CSS Classes

### Layout Classes
```css
.container          /* Responsive container with max-width */
.section-padding    /* Standard section padding */
.fade-in           /* Fade in animation */
.fade-in.visible   /* Visible state for fade in */
```

### Typography Classes
```css
.gradient-text     /* Gradient text effect */
.heading-1         /* Main heading style */
.heading-2         /* Section heading style */
.body-text         /* Body text style */
.muted-text        /* Muted text style */
```

### Component Classes
```css
.card-hover        /* Card hover effect */
.skill-bar         /* Skill progress bar */
.typing-animation  /* Typewriter effect */
.button-primary    /* Primary button style */
.button-secondary  /* Secondary button style */
```

## Data Structures

### Project Object
```javascript
{
  title: string,
  description: string,
  technologies: string[],
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cms',
  image: string,
  liveUrl: string,
  githubUrl: string
}
```

### Skill Object
```javascript
{
  name: string,
  level: number, // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools',
  icon?: string
}
```

### Experience Object
```javascript
{
  title: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string | 'Present',
  description: string[],
  technologies: string[]
}
```

## Environment Variables

### Development
```
VITE_API_URL=http://localhost:3000
VITE_CONTACT_FORM_ENDPOINT=/api/contact
```

### Production
```
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_FORM_ENDPOINT=/api/contact
VITE_ANALYTICS_ID=your-analytics-id
```

## Build Configuration

### Vite Config
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 5173,
    host: true
  }
})
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Error Handling

### Common Errors
```javascript
// Network errors
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  })
} catch (error) {
  console.error('Network error:', error)
}

// Form validation errors
const errors = {
  email: 'Invalid email format',
  message: 'Message is required'
}
```

### Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
```

## Performance

### Bundle Analysis
```bash
# Analyze bundle size
npx vite-bundle-analyzer dist

# Check dependencies
npm ls --depth=0
```

### Optimization Tips
```javascript
// Lazy load components
const LazyComponent = React.lazy(() => import('./Component'))

// Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data)
}, [data])

// Debounce user input
const debouncedSearch = useCallback(
  debounce((query) => {
    performSearch(query)
  }, 300),
  []
)
```

---

*For more detailed information, see the main documentation.*
