import './style.css'

export function Header(){
    return (
        <header className="header black">
            <div>
                <span>ReactFlix</span>
            </div>

            <div className="header-user">
                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            </div>
        </header>
    )
}