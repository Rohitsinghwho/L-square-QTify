import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Card from '../Card/Card';
import styles from "./Section.module.css"
import Carousel from '../Carousel/Carousel';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
const Section = ({title,endpoint}) => {
    const [albums,setAlbums]=useState([]);
    const [showAll,setShowAll]=useState(false);
    const [selectedGenre,setSelectedGenre]=useState("all");
    const [Genres,setGenres]=useState([]);
    const isSongSection=title==="Songs";
    useEffect(()=>{
        const fetchAlbums=async()=>{
            try {
                const res=await axios.get(endpoint);
                // console.log(res.data)
                setAlbums(res.data);
            } catch (error) {
                console.log("Error fetching albums",error);
            }
        }
         if(isSongSection){
            const fetchGenre=async()=>{
                try {
                    const response=await axios.get("https://qtify-backend-labs.crio.do/genres");
                    console.log("generes: "+ response.data[0])
                    setGenres(response.data?.data);
                } catch (error) {
                    console.log("error in fetching genres",error)
                }
            }
            fetchGenre();
        }
        fetchAlbums();
    },[endpoint,isSongSection]);
        
    const  filterdSongs=isSongSection?selectedGenre==='all'?albums:albums.filter(song=>song.genre.key===selectedGenre):albums;

  return (
    <section className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {title!=="Songs"&&
            <button className={styles.button} onClick={()=>setShowAll(!showAll)}>
                {showAll?"Collapse":"Show All"}
            </button>
            }
        </div>
        {isSongSection &&(
            <Tabs
            value={selectedGenre}
            onChange={(e,val)=>setSelectedGenre(val)}
           textColor='white'
           className={styles.tabs}
            >
            <Tab value={"all"} label="All"/>
            {Genres?.map((item)=>(
                <Tab key={item.key} value={item.key} label={item.label}/>
            ))}
            </Tabs>
        )}
       {showAll&&!isSongSection?(
        <div className={styles.grid}>
        {
            albums.slice(0,showAll?albums.length:7)
            .map((album)=>(
                <Card
                key={album.id}
                image={album.image}
                name={album.title}
                follows={album.follows}
                />
            ))
        }
        </div>
       ):(
         <Carousel
         items={isSongSection?filterdSongs:albums}
         renderItem={(album)=>(
            <Card
             key={album.id}
             image={album.image}
             name={album.title}
             follows={isSongSection?null:album.follows}
             likes={isSongSection?album.likes:null}
             isSongCard={isSongSection}
            />
         )}
         uniqueNavigationKey={title.replace(/\s/g, '')} 
         />
       )}
    </section>
  )
}

export default Section