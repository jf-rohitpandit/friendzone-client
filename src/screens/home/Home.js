import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classes from './Home.module.css'
import { loadUser } from '../../actions/userAction'
import { addFriend } from '../../actions/friendAction'
import Spinner from '../../components/UI/spinner/Spinner'
import { Fragment } from 'react'

const Home = (props) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [country, setCountry] = useState('')
  const [age, setAge] = useState(0)
  const [aboutMe, setAboutMe] = useState('')
  const [gender, setGender] = useState('')
  const [change, setChange] = useState(1)

  useEffect(() => {
    props.loadUser()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (props.userInfo && props.token) {
      setDataIntoState(props.userInfo)
    }
    // eslint-disable-next-line
  }, [change, props.userInfo])

  const acceptHandler = () => {
    console.log('accepted')
    props.addFriend(id)
    console.log('.accep', props.loadUser())
    setChange((state) => !state)
  }

  const rejectHandler = () => {
    console.log('rejected')
    console.log('.accep', props.loadUser())
    setChange((state) => !state)
  }

  const setDataIntoState = (userInfo) => {
    console.log(userInfo)
    const { name, image, country, age, aboutMe, gender, id } = userInfo

    console.log('userInfo', name, image, country, age, aboutMe, gender)

    console.log(image)
    if (name) {
      setName(name)
    }
    if (id) {
      setId(id)
    }
    if (country) {
      setCountry(country)
    }
    if (image) {
      setImage(image.avtarUrl)
      console.log('typeof avtar.data', image.avtarUrl)
    }
    if (aboutMe) {
      setAboutMe(aboutMe)
    }
    if (age) {
      setAge(age)
    }
    if (gender) {
      setGender(gender)
    }
  }

  return (
    <Fragment>
      {props.userLoading && <Spinner />}
      <div className="container">
        {props.userInfo !== null ? (
          props.userInfo.image ? (
            <div className="d-flex flex-row  rounded text-white bg-primary m-4 w-100">
              <img src={image} alt="" className={classes.avtar} />
              <div className="d-flex flex-column justify-content-center p-3 w-100">
                <div className="">
                  <h2 className="text-white">{name}</h2>
                  <h5 className="text-white">{age}</h5>
                  <h5 className="text-white">{gender}</h5>
                  <h6 className="text-white">{` ${country}`}</h6>
                  <p>{aboutMe}</p>
                </div>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-success" onClick={acceptHandler}>
                    Accept
                  </button>
                  <button className="btn btn-danger" onClick={rejectHandler}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-row  rounded text-white bg-primary m-4 w-100">
              <i className="fas fa-user fa-10x m-auto" />
              <div className="d-flex flex-column justify-content-center p-3 w-100">
                <div className="">
                  <h2 className="text-white">{name}</h2>
                  <h5 className="text-white">{age}</h5>
                  <h5 className="text-white">{gender}</h5>
                  <h6 className="text-white">{` ${country}`}</h6>
                  <p>{aboutMe}</p>
                </div>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-success" onClick={acceptHandler}>
                    Accept
                  </button>
                  <button className="btn btn-danger" onClick={rejectHandler}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <h2>No new User</h2>
        )}
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  token: state.auth.token,
  error: state.auth.error,
  userLoading: state.user.loading,
  userInfo: state.user.userInfo,
  userError: state.user.error,
})

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
  addFriend: (friendId) => dispatch(addFriend(friendId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
