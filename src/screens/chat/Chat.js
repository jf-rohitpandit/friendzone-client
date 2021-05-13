import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Chat.module.css';
import { io } from 'socket.io-client';
import { loadToken } from '../../localStorage';
import { getSingleFriend } from '../../actions/friendAction';
import { Fragment } from 'react';
import Spinner from '../../components/UI/spinner/Spinner';

const token = loadToken();

const sendTo = window.location.href.split('/')[4];
console.log(sendTo);

const socket = io('https://sleepy-basin-66163.herokuapp.com', {
	query: { token },
});

const loadChat = (sendTo) => {
	//chat storing locally to the localstore
	let conversation = null;
	console.log(sendTo);
	if (!localStorage.getItem(`conversations[${sendTo}]`)) {
		localStorage.setItem(`conversations[${sendTo}]`, []);
		conversation = [];
	} else {
		conversation = JSON.parse(localStorage.getItem(`conversations[${sendTo}]`));
	}
};

const Chat = (props) => {
	const history = useHistory();

	const [text, setText] = useState('');
	const [chat, setChat] = useState(conversation);

	const { id } = useParams();
	const sendTo = id;
	let conversation = loadChat(sendTo);

	//function for settting the view into the last message
	const setRef = useCallback((node) => {
		if (node) {
			node.scrollIntoView({ smooth: true });
		}
		// eslint-disable-next-line
	}, []);

	//protected route
	useEffect(() => {
		console.log('protected route');
		if (props.token === null) {
			history.push('/login');
			return;
		}
		// eslint-disable-next-line
	}, [props.token]);

	//getting the friend info
	useEffect(() => {
		props.getSingleFriend(sendTo);
		// eslint-disable-next-line
	}, [props.token]);

	const onSubmit = (e) => {
		e.preventDefault();

		if (text.length > 0) {
			onMessageSend(sendTo, text);
			setText('');
		}

		document.getElementById('text-input').focus();
	};

	const addToChat = useCallback(
		({ sender, text }) => {
			console.log(sender);
			console.log('added to chat');

			setChat([...chat, { sender, text }]);

			localStorage.setItem(`conversations[${sendTo}]`, JSON.stringify(chat));
			setText('');
		},
		[chat]
	);

	//function for handling the text sending form the user
	const onMessageSend = (sendTo, text) => {
		console.log(chat);
		socket.emit('send-message', { sendTo: sendTo, text });
		addToChat({ sender: 'You', text });
	};

	useEffect(() => {
		if (socket == null) {
			return;
		}
		socket.on('recieve-message', addToChat);

		return () => socket.off('recieve-message');
		// eslint-disable-next-line
	}, [addToChat]);

	return (
		<Fragment>
			{props.chatLoading && <Spinner />}
			<div className='container'>
				<h2>Chat</h2>
				<hr />
				<div className=' bg-primary p-2'>
					<div className='d-flex align-items-center m-2'>
						{props.singleFriend && props.singleFriend.photo != null ? (
							<img
								src={`data:image/jpg;base64,${Buffer.from(
									props.singleFriend.photo
								).toString('base64')}`}
								className={classes.avtar}
								alt='user avtar'
							/>
						) : (
							<i className='fas fa-user fa-2x'></i>
						)}

						<h6 className='pl-2 text-white'>
							{props.singleFriend && props.singleFriend.name
								? props.singleFriend.name
								: 'Full name'}
						</h6>
					</div>
					<div className={classes.chat}>
						{chat &&
							chat.map((converse, index) => {
								const lastMessage = chat.length - 1;
								// console.log(conversation[lastMessage]);
								return (
									<div
										ref={lastMessage ? setRef : null}
										key={index}
										className={`d-flex flex-column rounded p-2 my-1 ${
											converse.sender === 'You'
												? 'align-self-end align-items-end'
												: 'align-self-start align-items-start'
										}`}>
										{console.log(converse.text)}
										<div
											className={`border rounded p-1 ${
												converse.sender === 'You'
													? ' bg-success text-white'
													: 'bg-white'
											}`}>
											{converse.text}
										</div>
										<div className='small text-muted'>{converse.sender}</div>
									</div>
								);
							})}
					</div>
				</div>
				<form className=' form-group  mt-2 mt-b2 ' onSubmit={onSubmit}>
					<div className='d-flex'>
						<input
							id='text-input'
							type='text'
							className='form-control'
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button className='btn btn-info'>Send</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
	singleFriend: state.friend.singleFriend,
	chatLoading: state.friend.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getSingleFriend: (id) => dispatch(getSingleFriend(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
