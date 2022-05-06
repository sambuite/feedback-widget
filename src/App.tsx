import { Widget } from './components/Widget';

function App() {
  const THEME_KEY = '@feedget:theme';
  const themeMode = localStorage.getItem(THEME_KEY);

  if (
    themeMode === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_KEY, 'light');
  }

  function toggleTheme() {
    const themeMode = localStorage.getItem(THEME_KEY);

    if (themeMode === 'light') {
      localStorage.setItem(THEME_KEY, 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem(THEME_KEY, 'light');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', height: '100vh' }}>
        <button
          className="bg-brand-500 py-3 px-3 rounded font-semibold
            text-zinc-100
            hover:bg-brand-300
          "
          onClick={toggleTheme}
          style={{ margin: 'auto' }}
        >
          Toggle theme
        </button>
      </div>
      <Widget />
    </div>
  );
}

export default App;
