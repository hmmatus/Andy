import React, { Component } from 'react';
import { Image,Carousel} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { imagesArray } from './assets/images/index'
import './App.css';
import gif from './assets/images/birthday.gif'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      imagesArray: imagesArray,
    }
  }
  render() {
    const {imagesArray} = this.state;
    console.log(imagesArray);
    return (
      <div className="App">
        <h1>Felicidades Andrea por tu dia especial
        </h1>
        <img src={gif} className="image" alt="logo"/>
        <h2>Un nuevo mundo se abre ante ti y sé que quieres explorarlo pero nunca te olvides que estaremos para guiarte y para mostrarte con nuestro amor, el camino correcto para que no salgas herida a la joven edad de quince años.</h2>
        <Carousel
          slide
          interval={2000}
          controls
          nextIcon
          prevIcon
          indicators={false}
          autoPlay
        >
          {imagesArray.map((element,index)=>{
            return <Carousel.Item>
              <Image className="imageCarousel" src={element.value} alt={`Element ${element.pos}`}/>
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          })}
        </Carousel>
      </div>
    )
  }
}

export default App;