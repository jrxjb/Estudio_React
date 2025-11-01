
export function TwitterFollowCard ({userName, name, isFollowing}) {
    const imageSrc=`https://unavatar.io/x/${userName}`
    return (
        <article>
            <header>
            <img className='imagenAvatar' alt="Avatar" src={imageSrc}/>
            <div>
                <strong>{name}</strong>

                <span>@{userName}</span>
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
