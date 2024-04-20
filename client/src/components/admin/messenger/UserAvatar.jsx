import './user-list.css'

export default function UserAvatar(props) 
{
    /*
    props: {
        imageSrc: string
        isActive: boolean
        width?: number
        height?: number
    }
    */
    
    const isHaveDot = props.isActive != undefined

    if (props.width && props.height) {
        return (
            <div className="avatar-container">
                <img className="user-avatar"
                    src={props.imageSrc} alt="user-avatar"
                    style={{ width: props.width, height: props.height }} />
                
                {isHaveDot && props.isActive ? <div className="status-dot active"></div> : <></>}
                {isHaveDot && !props.isActive ? <div className="status-dot inactive"></div> : <></>}
            </div>
        );
    }

    return (
        <div className="avatar-container">
            <img className="user-avatar"
                src={props.imageSrc} alt="user-avatar" />
            
            {isHaveDot && props.isActive ? <div className="status-dot active"></div> : <></>}
            {isHaveDot && !props.isActive ? <div className="status-dot inactive"></div> : <></>}
        </div>
    );
}