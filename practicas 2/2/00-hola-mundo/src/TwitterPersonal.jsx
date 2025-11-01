
export function TwitterCardPersonal ({inSrc}) {
    const imageSrc=inSrc
    return (
        <article>
            <header>
            <img className='imagenAvatar' alt="Avatar" src={imageSrc}/>
            <div>
                <strong>Jose Bustamante</strong>

                <span>@gregory_zam</span>
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