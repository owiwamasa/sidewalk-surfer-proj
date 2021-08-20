import {useSelector} from 'react-redux'
import './errors.css'

const Errors = () =>{
    const errors = useSelector((state) => state.errors)
    return(
        <div>
            { errors?.map((errors,idx) => (
                <div className="errors" key={idx}>
                    {errors}
                </div>
            ))}
        </div>
    )
}

export default Errors