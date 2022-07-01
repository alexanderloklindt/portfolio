import logo from './logo.svg';
import {ReactComponent as Logo} from './logo.svg';
import { Trans } from 'react-i18next';


const Home = ({ t } : any) => ((
    <div>
        <h1>
            <i>{t('routes.home')}</i>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Logo/>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
    </div>
)
);

export default Home;