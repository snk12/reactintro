import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish ( {dish}) {
    return(
       
                <div >
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />  
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            
    );
}
    
    class RenderComments extends Component  {
        constructor(props) {
            super(props);
            this.toggleModal = this.toggleModal.bind(this); 
        ; 
            this.state = {
                isModalOpen: false
            };
        

        }
       toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        }
        handleSubmit(values){
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
            // event.preventDefault();
            
        }
        render() {
          return ( 
            <div>
                <h4>Comments</h4>
                         
                 {this.props.comments.map((x) => {
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
                }) }
                <Button onClick={this.toggleModal}>Summit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Summit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating" id="rating" className="form-control" defaultValue="1">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label hrmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                validators={{maxLength: maxLength(15),minLength: minLength(2)}} />
                                <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label hrmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" className="form-control" row="6"></Control.textarea>
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
  
          );
        }
        }
        
            
    
    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />
                        </div>
                    </div>
                </div>
            );
        }
     else{
         return(<div></div>);
     }
    } 
       


export default DishDetail;
