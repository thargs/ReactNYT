import  React, { Component } from 'react';
import API from '../../utilis/API';
import { Col, Row, Container} from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import { Input, FormBtn } from '../../components/Form';

class Articles extends Component {
  state = {
    articles: [],
    savedArticles: [],
    topic: "",
    startYear: "",
    endYear: ""
  }


  handleInputChange = event => {
   this.setState({ topic: event.target.value });
  };

  handleStartDateChange = event => {
    this.setState({ startYear: event.target.value });
  };

  handleEndDateChange = event => {
   this.setState({ endYear: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault()
    this.loadArticles();
  };

  loadArticles = () =>{
    API.searchArticles(this.state.startYear, this.state.endYear, this.state.topic)
      .then(res => this.setState({articles: res.data.response.docs}))
      .catch(error => console.log(error));
  };

  render () {
    return (
      <Container fluid>
        <Row>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Search for Articles</h3>
            <form style={{textAlign:'center'}}>
              <div style={{margin: 10}}>
                <label htmlFor="topic">Topic</label>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Pro Cycling "
                />
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="start-year">Start Year</label>
                <Input
                  value={this.state.startYear}
                  onChange={this.handleStartDateChange}
                  name="start-year"
                  placeholder="Format: YYYYMMDD"
                  />
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="end-year">End Year</label>
                <Input
                  value={this.state.endYear}
                  onChange={this.handleEndDateChange}
                  name="end-year"
                  placeholder="Format: YYYYMMDD"
                />
              </div>
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
            </form>
            </Jumbotron>
          </Col>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Search Results</h3>
              {this.state.articles.length ? (
              <div>{this.state.articles.map(article => (
                  <ul key={article._id}>
                    <a href={"/articles/" + article._id}><h4>{article.headline.main}</h4></a>
                    <h5>{article.snippet}</h5>
                    <button data-id={article._id}>Save</button>
                  </ul>
                  ))}
              </div>
              ) : (
              <h3>No Results to Display</h3>
              )}
            </Jumbotron>
          </Col>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Saved Articles</h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

    )
  }
}
export default Articles;
