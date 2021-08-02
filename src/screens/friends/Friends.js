import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Friends.module.css';
import { getFriend } from '../../actions/friendAction';
import { Fragment } from 'react';
import Spinner from '../../components/UI/spinner/Spinner';

const Friends = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getFriend();

        // eslint-disable-next-line
    }, []);

    const openChat = (id) => {
        history.push(`/chat/${id}`);
        return null;
    };

    return (
        <Fragment>
            {props.loadingFriend && <Spinner />}
            <div className='container'>
                <h2>My Friends</h2>
                <hr />
                <div className=''>
                    <ul className='list-group'>
                        {props.friendList ? (
                            props.friendList.map((friend) => (
                                <li
                                    className='list-group-item'
                                    key={friend.id}
                                    onClick={() => openChat(friend.id)}>
                                    <div className='d-flex flex-row'>
                                        {friend.photo ? (
                                            <img
                                                src={friend.photo.avtarUrl}
                                                className={classes.avtar}
                                                alt='avtar'
                                            />
                                        ) : (
                                            <i className='fas fa-user fa-2x'></i>
                                        )}

                                        <h6 className='align-self-center pl-2'>
                                            {friend.name}
                                        </h6>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h2>No Friends yet!</h2>
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    token: state.auth.token,
    error: state.auth.error,
    loadingFriend: state.friend.loading,
    successFriend: state.friend.success,
    errorFriend: state.friend.error,
    friendList: state.friend.friendList.list,
});

const mapDispatchToProps = (dispatch) => ({
    getFriend: () => dispatch(getFriend()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
