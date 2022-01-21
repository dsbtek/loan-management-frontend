import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import About from '../components/about';

const about = () => (
    <div>
        <Row>
            <Col>
                <Image src="/asusuCoporative.png" fluid />
            </Col>
            <Col className="col-6 mb-4">
                <h1> Asusu Cooperative </h1>
                <p
                    style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                    }}
                />
                {/* <About /> */}
            </Col>
        </Row>
    </div>
);

export default about;
