import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const {users, loading} = useContext(GithubContext)

  // fetchUsers is only used to check if we can GET from github API successfully
  // useEffect(() => {
  //   fetchUsers()
  // }, [])


  if(!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
        
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
