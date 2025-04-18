import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers, addUser } from '../store'
import Button from './Button'
import Skeleton from './skeleton';
import UsersListItem from './UsersListItem';
import { useThunk } from '../hooks/use-thunk'



function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadUsersError] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)


    const { data } = useSelector((state) => {
        return state.users; // {data: [], isLoading: false, error: null }

    })
    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])


    const handleUserAdd = () => {
        doCreateUser()
    }


    let content;
    if (isLoadingUsers) {
        content = <div> <Skeleton times={6} className="h-10 w-full" /></div>
    }
    else if (loadUsersError) {
        content = <div> Error fetching data.. </div>
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        })
    }

    return <div>
        <div className='flex flex-row justify-between m-3'>
            <h1 className='m-2 text-xl'> users</h1>

            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>

            {creatingUserError && 'Error'}
        </div>
        {content}
    </div>
}

export default UsersList