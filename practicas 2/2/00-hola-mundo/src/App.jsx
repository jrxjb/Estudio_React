import {TwitterFollowCard} from "../src/TwitterFollowCard.jsx"
import imageJB from '../src/imagenes/JB.png'

export function App () {
    //Pasando funciones
    const formatUser=(userName) =>`@${userName}`
    return (
        <section className='app-style'>
        <TwitterFollowCard
        formatUserName={formatUser}
         userName="grok" 
         name="Grok" 
         isFollowing={true}  
         isLocal={false}
         />
        <TwitterFollowCard
        formatUserName={formatUser} 
        userName="SpaceX" 
        name="SpaceX" 
        isLocal={false} />

        <TwitterFollowCard 
        formatUserName={formatUser}
        userName="midudev" 
        name="midudev" 
        isLocal={false}
        />
        <TwitterFollowCard
        formatUserName={formatUser}
        userName="gregory_zam" 
        name="José Bustamante" 
        isLocal={true} 
        inLocalDirection={imageJB}>
        <h1>Sigueme</h1>
        </TwitterFollowCard>

        </section>
    )
}