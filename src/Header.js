import menu from './assets/menu.png'
import help from './assets/help.png'
import stats from './assets/stats.png'
import settings from './assets/settings.png'

function Header() {
    return(
        <header>
            <div>
                <img  alt="menu icon" src={menu} />
                <div className="spacer"></div>
            </div>
            <h1>Wordlr</h1>
            <div className="icons"> 
                <img alt="help icon" src={help} />
                <img alt="stats icon" src={stats} />
                <img alt="settings icon" src={settings} />
            </div>
        </header>  
    )
}

export default Header;
