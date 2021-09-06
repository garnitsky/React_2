import React from 'react';
import styles from './users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: 'data:image/jpeg;base64,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', followed: false, fullname: 'Саша', status: 'Big boss', location: { city: 'Kyiv', country: 'Ukraine' } },
            { id: 2, photoURL: 'data:image/jpeg;base64,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', followed: true, fullname: 'Маша', status: 'boss', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8REzjJ8iUCBZiUhOLISFwIiQF9-lqmIKRbQ&usqp=CAU', followed: false, fullname: 'Паша', status: 'boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 4, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1U5EenkDVY-4jvhGjNqzonXsx_o9-ZSyKlg&usqp=CAU', followed: true, fullname: 'Даша', status: 'boss', location: { city: 'Warsawa', country: 'Poland' } }

        ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} alt='sss' className={styles.userPhoto}></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;