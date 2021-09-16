import styles from './users.module.css';
import userPhoto from '../../img/OIP.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { getFollow, getUnFollow } from '../../api/api';


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
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='sss' className={styles.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                getUnFollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                getFollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    });
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