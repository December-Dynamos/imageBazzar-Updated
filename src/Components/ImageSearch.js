import React,{useState, useEffect} from "react"; 
import axios from "axios";

// console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)


const ImageSearch=({images, setImages})=>{
 
    const [searchTerm,setSearchTerm]=useState('')
    const [page,setPage]=useState(1) // 10


    // useEffect(()=>{
    //     fetchImages(null, "random")
    // },[])

    useEffect(()=>{
        setPage(1)
    },[page])
   

// todo:  remove access key from here and put it in .env file
    async function fetchImages(e, flag){
        console.log(e)
        console.log(flag)
       if(e){
        e.preventDefault()
       }
       try{
            const response =  await axios.get("https://api.unsplash.com/search/photos",{
                    headers: {
                        "Accept-Version": "v1",
                            "Authorization" : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                    },
                    params: {
                            query: searchTerm ,
                            per_page: 5,
                            page: page // 1
                    }
                })
                console.log(response.data.results) // [{} , {} , {}]
                if(flag==="submit"){
                    setImages(response.data.results)
                }
                else{
                    setImages([...images,...response.data.results ])
                   
                }
                setPage(page+1)
                


        }
        catch(error){
            console.log(error)
        }
    }

    // i1 = [{}, {} , {} , {}, {}]

    // i2 = [{}, {} , {} , {}, {}, {}]

    // images = [...i1, ...i2]




    return(
        <div>
            <form onSubmit={(e)=>fetchImages(e,"submit")}>
                <input type="text" placeholder="Enter search ..."
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button type="submit">Search</button>
            </form>
            <button onClick={fetchImages}>Next</button>
        </div>
    )
}

export default ImageSearch;