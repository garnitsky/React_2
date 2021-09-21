import styles from './users.module.css';
import userPhoto from '../../img/OIP.jpg';
import { NavLink } from 'react-router-dom';
import { follow, unFollow, usersAPI } from '../../api/api';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagesNumber}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div >
        {
            props.users.map(u => <div key={u.id}> {console.log(u.followed)}
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Photo' className={styles.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id) => id === u.id)} onClick={() => {
                                props.unfollow(u.id);

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);

                            }}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div >)
        }
    </div >
};

export default Users;