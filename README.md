# Terrarium Scenarios

Multi-scenario frontend for the Terrarium agentic simulation platform.

## Scenarios

- **Legends Night Out** (`/legends`) - Bob Dylan, Jimi Hendrix, Chuck Norris in 1969 Greenwich Village
- **Writers Room From Hell** (`/writers`) - Shakespeare, Hunter S. Thompson, Dorothy Parker, Poe, Maya Angelou pitching a TV show
- **Philosophers vs Tech Bros** (`/philosophers`) - Ancient philosophers debate Silicon Valley founders

## Deployment

### GitHub
1. Create new repo: `terrarium-scenarios`
2. Push all files

### Vercel
1. Import GitHub repo
2. Framework: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

Routes will automatically work:
- `/` - Home (scenario selector)
- `/legends` - Legends Night Out
- `/writers` - Writers Room
- `/philosophers` - Philosophers vs Tech Bros

## Local Development

```bash
npm install
npm run dev
```

## Adding New Scenarios

1. Create new folder in `src/scenarios/[name]/`
2. Add `[Name]App.jsx`, `[Name]App.css`, `firebase.js`
3. Update `src/main.jsx` to add route
4. Update `src/Home.jsx` to add scenario card
