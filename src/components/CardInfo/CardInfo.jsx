import Card from 'react-bootstrap/Card';
import './CardInfo.css'

function BasicExample({title, text, paddingTop}) {
    return (
        <Card className="border-cardInfo">
            <Card.Body className={`align-content-center ${paddingTop}`}>
                {/* <Card.Img variant="top" src="holder.js/100px180" />  */}
                <Card.Title className={`text-center fs-4 ${paddingTop}`}>{title}</Card.Title>
                <Card.Text className='text-center'>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



export default BasicExample;