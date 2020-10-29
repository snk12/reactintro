import React, { Component } from 'react';
import { Media } from 'reactstrap';
//import menu from './MenuComponent';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
      
        }
    }
    renderDish(dish) {
        if (dish != null) {
          const lists= 
           this.props.dish.comments.map((x) => {
              return (
                  <div key={x.id}>
                      <div className="col-12">
                              {x.comment}
                      </div>
                      <div className="col-12">
                          -- {x.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}
                      </div>
                  </div>
              );
          }) 
            return(
                <div className="container">
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
                        <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                            <h2>Comments</h2>
                            <div> { lists } </div>
                        </div>
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

export default DishDetail;



