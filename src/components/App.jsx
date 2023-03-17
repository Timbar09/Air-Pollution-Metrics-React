import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../routes/Home';
import Stats from '../routes/Stats';
import NotMatch from '../routes/NotMatch';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
