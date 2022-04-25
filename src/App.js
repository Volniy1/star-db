import {Routes,Route} from 'react-router-dom';

import{Home} from './pages/Home';
import{StarShips} from './pages/starships';
import{Planets} from './pages/planets';
import{NotFound} from './pages/notFound';
import {Layout} from './components/layout';
import{ShipPreset} from './pages/shipPreset'

function App() {
  return (
   <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="starships" element={<StarShips />}/>
        <Route path="starships/:id" element={< ShipPreset/>}/>
        <Route path="planets" element={<Planets />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
