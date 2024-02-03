import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="Avatar" src="https://us.123rf.com/450wm/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-hombre-sonriente-de-dibujos-animados-persona-de-sexo-masculino-de-usuario-ilustraci%C3%B3n.jpg" />
                <div>
                    <strong>Maxi Centeno</strong>
                    <span>@MaxiC</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}