import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import cx from 'classnames';
import Link from '../Link';
import { Grid, Row, Col } from 'react-bootstrap';

const FooterLink = (props) => (
  <div className={s.linkContainer}>
    <Link to={props.to} className={s.link}>
      {props.text}
    </Link>
  </div>
);

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Grid fluid className={s.root} >
          <Row className={s.flexRow}>
            <Col sm={4} >
              <h2 className={s.brandText}>GEHMI</h2>
            </Col>

            <Col sm={8}>
              <Row>
                <Col sm={4} className={s.subContainer}>
                  <FooterLink to={'#'} text="ABOUT US" />
                  <FooterLink to={'#'} text="CONTACT" />
                </Col>

                <Col sm={4} className={s.subContainer} >
                  <FooterLink to={'#'} text="CONNECTION" />
                  <FooterLink to={'#'} text="FAQ" />
                </Col>

                <Col sm={4} className={s.subContainer} >
                  <FooterLink to={'#'} text="RECRUTEMENT" />
                  <FooterLink to={'#'} text="FOLLOW US" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            style={{
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            <p className={s.copyRightText}>
              © 2016 GEHMI. All Rights Reserved
            </p>
          </Row>

        </Grid>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
