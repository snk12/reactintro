import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


    
    function RenderComments ( { dish , comments }) {
        
          const lists= 
         comments.map((x) => {
              return (
                  <div>
                     <ul className="list-unstyled">
                        <li key="x.id">
                            <p>{x.comment}</p>
                            <p> -- {x.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</p>
                        </li>
                     </ul>
                  </div>
              );
          }) 
          return ( 
            <div key={dish.id} className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <div> { lists } </div>
            </div>
  
          );
        }
        function RenderDish ( {dish}) {
            return(
               
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        
                    
            );
        }
            
    
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                     <RenderDish dish={ props.dish } />
                     <RenderComments dish={ props.dish } comments={ props.dish.comments } />
                 </div>
            </div>
                 
               
        );
    } 
       


export default DishDetail;



