import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/userStore/user.actions';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
