import AppRoutes from './routes/AppRoutes';
import Header from './components/header';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
