import './style.css'

export function Header(props){
    return (
        <header className={props.HeaderInBlack ? 'black' : ''}>
            <div>
                <span>ReactFlix</span>
            </div>

            <div className="header-user">
                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            </div>
        </header>
    )
}