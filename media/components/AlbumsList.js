import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from './skeleton'
import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button"
import AlbumsListItem from "./AlbumsListItem"



function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (isLoading) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div> Error</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album} />
        })
    }


    return <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> <div>Albums for {user.name}</div> </h3>
        <Button loading={isLoading} onClick={handleAddAlbum}>
            + Add Album
        </Button>
        <div>{content}</div>
    </div>
}


export default AlbumsList