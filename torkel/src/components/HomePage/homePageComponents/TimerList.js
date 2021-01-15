import React from 'react'
import { StateContext } from '../../../State'
import './TimerList.css'
import axios from 'axios'


export default function TimerList() {
    let { HomepageListing, apiURL } = React.useContext(StateContext)
    let context = React.useContext(StateContext)

    React.useEffect(() =>{
        axios.get(apiURL+`current/runners`)
            .then(res => {
                let tArr1 = res.data.map(i => {
                    return (
                        `drop off location: ${i.dropOffLocation} drop off time: ${i.dropOffTime}`
                    )
                })
                context.setState({
                    HomepageListing: {
                        ...HomepageListing,
                        Runner: {
                            ...HomepageListing.Runner,
                            listings: tArr1
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 

    return(
        <div className='timers'>
            <div className='time'>
                <div className='bro'>Timers will go here</div>
            </div>
        </div>
    )
}