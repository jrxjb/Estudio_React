import imageJB from '../src/imagenes/JB.png'

export function TwitterFollowCard ({children,formatUserName,userName, name, isFollowing, isLocal,inLocalDirection}) {
    const localDirection=inLocalDirection
    let imageSrc=""
if(isLocal){
    imageSrc=localDirection; 
}else{
    imageSrc= `https://unavatar.io/x/${userName}`;
}
    return (
        <article>
            <header >
            <img className='imagenAvatar' alt="Avatar" src={imageSrc}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
                <div className='children-class'>{children}</div> 
            </div>
            <aside>
                 <img className='imagenVerified' src="../src/imagenes/Verified.png"/>   
            </aside>
            </header>
            <aside>
                <button>
                    seguir
                </button>
            </aside>
        </article>
    )
}

