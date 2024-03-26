import './Student.scss'
import studentImage from '../../assets/images/student-placeholder.png'
const Student = () =>{
    return(
        <div className="student">
        <div className="student__content">
            <img 
                className="student__image" 
                src={studentImage}
                alt="Test Student Account Image" />
        </div>
        <h4 className="student__title">Student Name</h4>
    </div>
    );
}

export default Student