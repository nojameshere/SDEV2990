import '../CSS/UserMenu.css';

const UserMenu = () => {
    return(
        <div className='userOptions'>
            {/* <button className='authButton'>
                Sign In
            </button> */}
            <button className='authButton' onClick={() => {
                localStorage.removeItem('accessToken');
                window.location.reload();
            }}>
                Log Out
            </button>
        </div>
    )
}

export default UserMenu;