import Card from 'react-bootstrap/Card';
import './CardInfo.css'

function CardInfo({title, text, textColor, imagen, border, }) {

    const borderCard = border ? "border-cardInfo" : "cardInfo"
    
    return (
        <Card className={`cardInfo ${borderCard}`}>
            <Card.Body className={`align-content-center`}>
                {imagen ? 
                    <Card.Img className='nosotros-head__icon' variant="top" src={imagen} /> 
                : 
                    <Card.Title className={`text-center fs-4`}>{title}</Card.Title>
                }
                <Card.Text className={`text-center fs-5 ${textColor}`}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardInfo;