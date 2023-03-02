
import { useState, useEffect } from "react"

const Togglelist = () => {
    const [toggle, settoggle] = useState(true);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('');
    const handleChange = e => {
        setMessage(e.target.value);

        console.log("value" + e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (firstname.length == 0 || lastname.length == 0 || checkbox == false) {
            setError(true)
        }
        if (lastname && firstname && checkbox == true) {
            console.log(firstname, lastname, checkbox)

        }
    }

    return (
        <>
            <button onClick={() => settoggle(!toggle)}>click</button>
            {
                toggle && (
                    <ul>
                        <li>q</li>
                        <li>d</li>
                        <li>c</li>
                        <li>e</li>
                    </ul>
                )
            }

            <label>
                <input type="text" className="inputbox" value={message} onChange={handleChange} />
                {
                    !message ? <i className="btn" class='bx bx-universal-access'></i> : <i className="btn" class='bx bxl-typescript' ></i>
                }
                Name: {message}
            </label>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setFirstname(e.target.value)}></input>
                {error && firstname.length <= 0 ?
                    <label className="label">first name</label> : ""
                }
                <br></br>
                <input type="text" onChange={e => setLastname(e.target.value)}></input>
                {
                    error && lastname <= 0 ? <label className="label">last name</label> : ""

                }

                <br></br>
                <input type="checkbox" defaultChecked={checkbox} onChange={() => setCheckbox(!checkbox)} ></input>
                {
                    error && checkbox == false ? <label className="label">vui long check</label> : true

                }
                <br></br>
                <button type="submit">click me</button>
            </form>


        </>
    )
}
function CountDownDate() {
    const [Days, Setdays] = useState('00');
    const [Hours, SetHours] = useState('00');
    const [Minutes, SetMinutes] = useState('00');
    const [Seconds, SetSeconds] = useState('00');

    const StartTimer = () => {
        const DownDate = new Date("May 20,2023").getTime();

        let interval = setInterval(() => {
            const Now = new Date().getTime();
            const distance = DownDate - Now;
            const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
            const seconds = Math.floor(distance % (60 * 1000) / 1000)

            if (distance < 0) {
                clearInterval(interval)
            } else {
                Setdays(days)
                SetHours(hours)
                SetMinutes(minutes)
                SetSeconds(seconds)
            }
        }, 1000)
    }
    useEffect(() => {
        StartTimer();
    });
    return (
        <section className="TimeData">
            <section className="timer">
                <div className="clock">
                    <section>
                        <p>{Days}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{Hours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{Minutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{Seconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section>
        </section>
    )
};

function TodoList() {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('job'))
        return storageJobs
    })
    const handleDel = (index) => {
        setJobs((prev) => {
            prev = jobs.filter((job) => job !== jobs[index]);
            const jsonJobs = JSON.stringify(prev);
            localStorage.setItem("job", jsonJobs);
            return prev;
        });
    };

    const handleClearAll = () => {
        setJobs((prev) => {
            prev = jobs.splice(0, jobs.length);
            const jsonJobs = JSON.stringify(prev);
            localStorage.setItem("job", jsonJobs)
            return prev;
        });
    };
    const handleSubmit = () => {
        if (job == '') {
            return
        } else {
            setJobs(rest => {
                const newJobs = [...rest, job]

                const jsonJobs = JSON.stringify(newJobs)
                localStorage.setItem('job', jsonJobs)
                return newJobs
            })
            setJob('')
        }
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            handleSubmit()
        }
    };
        
    
    return (
        <div className="containers">
            <div className="handle">
                <input placeholder="nhap ghi chu" value={job} onChange={(e) => setJob(e.target.value)} onKeyDown={handleKeyDown} autoFocus />
                <button onClick={handleSubmit} >Add</button>
                <button onClick={handleClearAll}>Clear All</button>
            </div>
            <div className="render">
                    <ul>
                        {jobs.map((job, index) => (
                            <li key={index}>
                                {job}
                                <button onClick={() => handleDel(index)}>
                                    X
                                </button>
                            </li> 
                            
                        ))}
                    </ul>
            </div>

        </div>
    );
}
export default TodoList