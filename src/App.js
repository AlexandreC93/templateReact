import React from 'react'

import Container from './components/Container'
import Box from './components/Box'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Button from './components/Button'
import About from './components/About'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <>
        <Navbar title="REACT LANDING PAGE"></Navbar>
        <Header ></Header>
        <Container name="feat-cont" class="feat-title" title="FEATURES">

          <div id="box-cont">

            <Box id="feat-box"
              icon="fa fa-comments"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate." />

            <Box id="feat-box"
              icon="fa fa-bullhorn"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate." />

            <Box id="feat-box"
              icon="fa fa-group"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate." />

            <Box id="feat-box"
              icon="fa fa-magic"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate." />

          </div>
        </Container>
        <Container name="about-cont"
          class="about-title"
          title="ABOUT">

          <About />

        </Container>

        <Container name="service-cont"
          class="service-title"
          title="OUR SERVICES" >

          <div id="box-disp">

            <div className="disp">
            <Box id="feat-box"
              icon="fa fa-group"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
              title="COUCOU" />
            <Box id="feat-box"
              icon="fa fa-check"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
              title="SALUT" />
            <Box id="feat-box"
              icon="fa fa-mouse"
              text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
              title="CESTNOUS" />
              </div>

            <div className="disp">

              <Box id="feat-box"
                icon="fa fa-pen"
                text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
                title="HOHOHSQ" />
              <Box id="feat-box"
                icon="fa fa-group"
                text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
                title="KUGJFDD" />
              <Box id="feat-box"
                icon="fa fa-group"
                text="Loremo lkqndxoq poiqhihqd oiHOISH iusto cupiditate."
                title="KUGUTD" />
            </div>
          </div>


        </Container>
      </>

    );
  }
}

export default App;

