import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    const header = <div>{album.title}</div>

    return (

        <ExpandablePanel key={album.id} header={header} >
            List of phots
        </ExpandablePanel>
    )
}



export default AlbumsListItem;