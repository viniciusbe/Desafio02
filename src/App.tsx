import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { SelectedGenreProvider } from './contexts/SelectedGenreContext';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectedGenreProvider>
        <SideBar></SideBar>
        <Content></Content> 
      </SelectedGenreProvider>
    </div>
  )
}