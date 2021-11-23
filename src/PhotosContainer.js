import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { getPhotosAsync } from "./features/photos/photoSlice";
import { getPhotosFromState, getLoadingState } from "./features/photos/photoSlice"; 

export const PhotosContainer = () => {
  const photos = useSelector(getPhotosFromState); 
  const loading = useSelector(getLoadingState); 
  const dispatch = useDispatch();

  console.log('loading', loading); 
  console.log(photos); 

  useEffect(() => {
    dispatch(getPhotosAsync())
  // Safe to add dispatch to the dependencies array
  }, [dispatch])
  
  const renderPhotos = (photos) => {
    const thePhotos = photos.length === 1 ? photos[0] : photos; 

    return thePhotos.map((photo) => {
      return (
        <div key={photo.id}>
          <img src={ photo.thumbnailUrl } alt="thumbnail" />
          <div>{ photo.title }</div>
        </div>
      )
    }); 
  }

  return (
    <div>
      { loading ? <div>Loading ...</div> : 
        renderPhotos(photos)
      }
    </div>
  )

}