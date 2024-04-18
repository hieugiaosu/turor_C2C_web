import './user-list.css'

export default function UserAvatar(props) 
{
    /*
    props: {
        imageSrc: string
        isActive: boolean
    }
    */
    return (
        <div className="avatar-container">
            <img className="user-avatar" src={props.imageSrc} alt="user-avatar" />
            <div className={`status-dot ${props.isActive ? 'active' : 'inactive'}`}></div>
        </div>
    );
}