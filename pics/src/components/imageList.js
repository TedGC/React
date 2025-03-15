import imageShow from './imageShow'

function imageList({images}) {
    const renderedImages = images.map((image) => {
        return <imageShow key={image.id} image={image}/>
    })
    return <div>
       {renderedImages}
    </div>
}


/**
 * requrieemtns for keys
 * 
 * 1. use whenever we have a list of elements (so every time we do a 'map')
 * 2. add the key to the top-most JSX element in the list
 *  (ex. try not to wrap it within <div>, but rather put it in <div>)
 * 3. must be a string or number
 * 4. should be unique for this lsit
 * 5. should consistent across rerenders
 * 
 */
export default imageList;