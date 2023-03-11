import menu from './assets/menu.png'
import help from './assets/help.png'
import stats from './assets/stats.png'
import settings from './assets/settings.png'

function Header() {
    return(
        <header>
            <div>
                <img  src={menu} />
                <div className="spacer"></div>
            </div>
            <h1>Wordlr</h1>
            <div className="icons"> 
                <img  src={help} />
                <img  src={stats} />
                <img  src={settings} />
            </div>
        </header>  
    )
}

export default Header;
