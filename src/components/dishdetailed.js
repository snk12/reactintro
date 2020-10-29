import React, { Component } from 'react';
import { Media } from 'reactstrap';
//import menu from './MenuComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetailed extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
      
        }
    }
    renderDish(dish) {
        if (dish != null) {
          
            return(
                <div className="row">
                 <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div key={this.props.dish.id} >
                    <Media list className="col-12 col-md-5 m-1">
                    <Media heading>Comments</Media>
                        {this.props.dish.comments.map((x) => {
            return (
              <div key={x.id}>
                <div>
                <Media>{x.comment}</Media>
                </div>
                    <div>
                    <Media>-- {x.author} , {x.date}</Media>
                    </div>
                   

                  
               
              </div>
            );
        })}
                    </Media>
              </div>
              </div>
            );
    }
        else {
            return(
                <div></div>
            );
        }
    }
  
    render() {
        return(
            <div className="container">
            <div className="row">
           
                     {this.renderDish(this.props.dish)}
                </div>
                </div>
                 
               
        );
    }
}

export default Dishdetailed;