
## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000
```

3. Start the development server:
```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
client/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── styles/        # Global styles
│   └── App.jsx        # Main application component
├── public/            # Static assets
└── index.html         # Entry HTML file
```

## Environment Variables

- `VITE_API_URL`: Backend API URL (default: http://localhost:5000)

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/postcss": "^4.1.4",
  "autoprefixer": "^10.4.21",
  "axios": "^1.8.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.488.0",
  "postcss": "^8.5.3",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.0",
  "socket.io-client": "^4.8.1",
  "tailwindcss": "^3.4.1",
  "zustand": "^5.0.3"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.22.0",
  "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.22.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "vite": "^6.3.0"
}
```

## Common Issues

1. **WebSocket Connection Issues**
   - Check if the backend server is running
   - Verify VITE_API_URL in .env file
   - Check browser console for connection errors

2. **Build Issues**
   - Clear node_modules and package-lock.json
   - Run `npm install` again
   - Make sure all dependencies are properly installed

3. **Development Server Issues**
   - Check if port 5173 is available
   - Clear Vite cache
   - Check for Node.js version compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Please read the main README.md file in the root directory for contribution guidelines.
