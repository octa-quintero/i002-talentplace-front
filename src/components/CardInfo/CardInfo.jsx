import Card from 'react-bootstrap/Card';

function BasicExample({title, text, paddingTop}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className={`align-content-center ${paddingTop}`}>
                {/* <Card.Img variant="top" src="holder.js/100px180" />  */}
                <Card.Title className={`text-center ${paddingTop}`}>{title}</Card.Title>
                <Card.Text className='text-center'>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



export default BasicExample;