import Livematch from './Livematch/Livematch'
import MyBet from './myBet/MyBet'
import './style.scss'

const Rightside = ({matchId}) => {
  return (
    <>
    <Livematch />
    <MyBet matchId={matchId}/>
    </>
  )
}

export default Rightside