import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2>Website development Alexander Prokofiev</h2>
                    <p>
                        Combining lessons on learning React JS
                    </p>
                    <Link to={'/tooltip'}>
                        <Button bsStyle="success">Learn more</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center" >
                    <Col xs={12} md={4} className={'person-wrapper'}>
                        <Image src={'assets/style-3.jpg'} circle className={'profile-pic'}/>
                        <h3>HTML</h3>
                        <p>Стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.
                            Язык HTML до 5-й версии определялся как приложение SGML (стандартного обобщённого языка разметки по стандарту ISO 8879). Спецификации HTML5 формулируются в терминах DOM (объектной модели документа).
                        </p>
                    </Col>
                    <Col xs={12} md={4} className={'person-wrapper'}>
                        <Image src={'assets/style-1.jpg'} circle className={'profile-pic'}/>
                        <h3>CSS</h3>
                        <p>Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.
                            Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className={'person-wrapper'}>
                        <Image src={'assets/style-2.jpg'} circle className={'profile-pic'}/>
                        <h3>JavaScript</h3>
                        <p>Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262).
                            JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
