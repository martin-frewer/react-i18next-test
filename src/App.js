import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
const lngs = {
  en: { nativeName: 'English' },
  is: { nativeName: 'Íslenska' }
};

function App() {
  const { t, i18n} = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Trans i18nKey="description.part1">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </Trans>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           {t('description.part2')}
        </a>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </header>
   
     

    </div>
  );
}

export default App;
