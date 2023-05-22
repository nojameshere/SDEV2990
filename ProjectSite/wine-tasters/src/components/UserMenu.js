import './UserMenu.css';

const UserMenu = () => {
    return(
        <div className='userOptions'>
            <button className='authButton'>
                Sign In
            </button>
            <button className='authButton'>
                Log Out
            </button>
        </div>
    )
}

export default UserMenu;