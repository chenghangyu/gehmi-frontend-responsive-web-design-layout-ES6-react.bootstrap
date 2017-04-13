import React, { PropTypes } from 'react';
import{rander}from'react-dom';
import { Grid,Row,Col} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';



/* Example for using css modules
// 1. import dependencies
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

 <div className={s.root}>css modules</div>
 <div className={cx(s.root,s.highlight)}>css modules</div>

// wrap with higher order component when export
export default withStyles(s)(Home);
*/

/* Exmaple for using inline styling
  <div style={{textAlign:'center'}}>
    css module
  <div>

  <div style={Object.assign({
    styles.common,
    {textAlign:'center'}
  })}>
    inline styling
  <div>
*/

class Home extends React.Component {
  render() {

    return (

      <Grid bsClass style={{ paddingTop: 150, paddingBottom: 150 }}>
        <h2><div style={{textAlign:'center'}}>
          Welcome to GEHMI
        </div></h2>

          <Row>
              <Col lg={6} sm={12} xs={12}><div className={s.r1} style={{backgroundColor:'#337ab7'}}>
                  {'Row1.Col1'}
              </div></Col>
              <Col lg={6} sm={12} xs={12}><div className={s.r1} style={{backgroundColor:'#337ab7'}}>
                  {'Row1.Col2'}</div></Col>
          </Row>

          <Row>
              <Col lg={12} sm={12} xs={12}><div className={s.r2} style={{backgroundColor:'#f0ad4e'}}>
                  {'Row2.Col1'}</div></Col>
          </Row>

          <Row>
              <Col lg={4} sm={12} xs={12}><div className={s.r3} style={{backgroundColor:'#5cb85c'}}>
                  {'Row3.Col1'}</div></Col>
              <Col lg={4} sm={12} xs={12}><div className={s.r3} style={{backgroundColor:'#5cb85c'}}>
                  {'Row3.Col2'}</div></Col>
              <Col lg={4} sm={12} xs={12}><div className={s.r3} style={{backgroundColor:'#5cb85c'}}>
                  {'Row3.Col3'}</div></Col>
          </Row>

          <Row>
              <Col lg={3} sm={6} xs={12}><div className={s.r4} style={{backgroundColor:'#d9534f'}}>
                  {'Row4.Col1'}</div></Col>
              <Col lg={3} sm={6} xs={12}><div className={s.r4} style={{backgroundColor:'#d9534f'}}>
                  {'Row4.Col2'}</div></Col>
              <Col lg={3} sm={6} xs={12}><div className={s.r4} style={{backgroundColor:'#d9534f'}}>
                  {'Row4.Col3'}</div></Col>
              <Col lg={3} sm={6} xs={12}><div className={s.r4} style={{backgroundColor:'#d9534f'}}>
                  {'Row4.Col4'}</div></Col>
          </Row>


      </Grid>

    );
  }
}
export default withStyles(s)(Home);

