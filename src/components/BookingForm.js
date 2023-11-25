import Button from "./Button";
import {useState, useEffect, React} from 'react';


const BookingForm = () => {
    const [date, setDate] = useState({
        isTouched: false,
        date:''
    })
    const [time, setTime] = useState({
        isTouched: false,
        time:'',
    })
    const [guests, setGuests] = useState({
        isTouched: false,
        guests:1,
    })
    const [occasion, setOccasion] = useState({
        isTouched:false,
        occasion:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            return false
        }
        setDate({date:'', isTouched:false})
        setTime({time:'', isTouched:false})
        setGuests({guests:'', isTouched:false})
        setOccasion({occasion:'', isTouched:false})
        alert('Booking Reserved Successfully')
    }

    const isValid = () => {
        if (date.date.length == 0) {
            return false
        }
        if (['Birthday', 'Anniversary'].includes(occasion.occasion)) {
            return false
        }
        return true
    }

    return (
        <>
            <h1 style={{textAlign:"center", marginTop:0}}>Book your Table</h1>
            <div style={{justifyContent:'center', alignItems:'center', width:"100%"}}>  
                <form onSubmit={handleSubmit} style={{display:'Grid', maxWidth:200, gap:20}}>
                    <label for="res-date">Choose date</label>
                    <input required type="date" value={date.date} id="res-date" style={(((date.date.length)==0) && date.isTouched)?{borderWidth:4, borderColor:'red'}:{borderWidth:0}} onChange={(e) => setDate({date:e.target.value, isTouched:true})}></input>
                    {(((date.date.length)==0) && date.isTouched)?<p style={{margin:0}}>Missing Date</p>:''}
                    <label for="res-time">Choose time</label>
                    <select value={time.time} onChange={(e) => setTime({time:e.target.value, isTouched:true})} id="res-time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label for="guests">Number of guests</label>
                    <input value={guests.guests} onChange={(e) => setGuests({guests:e.target.value, isTouched:true})} type="number" placeholder="1" min="1" max="10" id="guests"></input>
                    <label for="occasion">Ocassion</label>
                    <select value={occasion.occasion} onChange={(e) => setOccasion({occasion:e.target.value, isTouched:true})} id="occcasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <Button type="submit" text="Make Your Reservation"></Button>
                </form>
            </div>
        </>

    );

}

export default BookingForm;