

const ImageList = ({images}) => {


    return (
        <div>
            {
                images.map(value => (
                   <img 
                       src={value.urls.thumb} alt={value.alt_description}
                   />
                     
                ))
            }
        </div>
    )
}

export default ImageList