import { useEffect, useState } from "react"


function Title(){
    const[album, setTitle] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(album => 
            setTitle(album)
        )
    },[])
    return(
        <div>
            {
                album.map(album => {
                    return <li key={album.id}>{album.title}</li>
                })
            }
            {
                album.map(album => {
                    return <p key={album.id}>{album.title}</p>
                })
            }
        </div>
    )
}
export default Title