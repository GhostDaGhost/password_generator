import { render } from 'preact';
import { App } from './app.tsx';
import './styles/Global.less';

render(<App />, document.getElementById('app')!);
