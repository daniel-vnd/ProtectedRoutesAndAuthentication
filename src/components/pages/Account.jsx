import { AuthData } from '../../auth/AuthWrapper'

const Account = () => {

  const { user } = AuthData();

  console.warn(user);
  return (
    <div className='page'>
      <h2>Account page</h2>
      <p>Username: { user.userName }</p>
    </div>
  )
}

export default Account