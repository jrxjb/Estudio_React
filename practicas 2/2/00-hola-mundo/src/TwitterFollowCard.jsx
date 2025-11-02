import imageJB from '../src/imagenes/JB.png'
import React from 'react'
import {useState} from 'react'

export function TwitterFollowCard ({children,formatUserName,userName, name, isLocal,inLocalDirection}) {
    const imageSrc = isLocal ? inLocalDirection:`https://unavatar.io/x/${userName}`;
    const [isFollowing,setIsFollowing]=useState(false);
    const handleClick = ()=> {
        setIsFollowing(!isFollowing)
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
                <button className='button-class' onClick={handleClick}>
                    {isFollowing ? 'Siguiendo':'Seguir'}
                </button>
            </aside>
        </article>
    )
}

