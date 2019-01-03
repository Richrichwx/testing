import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from './Popup'

const Container = styled('div')`
 `;

const ContainerSearch = styled('div')`
    position: absolute;
    width: 100%;
    height: 42px;
    background: #4a76a8;
    box-sizing: border-box;
    border-bottom: 1px solid #4872a3;
 `;

const Input = styled('input')`
    border: 0;
    box-sizing: border-box;
    padding: 6px 6px 6px 19px;
    margin: 7px 360px;
    height: 28px;
    line-height: 16px;
    width: 230px;
    border-radius: 14px;
    transition: background-color 0.05s, color 0.05s;
    background: #224b7a;
    padding-left: 19px;
    border-left: 8px solid transparent;
    background-position: left 8px;
    background: #224b7a url(https://vk.com/images/svg_icons/ic_head_loupe.svg) no-repeat;
    background-position: left 8px;
    outline: none;
    
   &:focus{
     background-color: #fff;
     color: #000;
   }
   
   &::placeholder { 
     color: #e7e7e7; 
   }
 `;

const Suggestions = styled('div')`
    margin:5px 0 0 178px;
    position: absolute;
    top: 39px;
    left: 173px;
    background: #fff;
    width: 248px;
    z-index: 800;
    border-radius: 7px;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
 `;

const ContainerSuggest = styled('div')`
    font-size: 18px;
    padding: 10px 0 10px 10px;
    cursor: pointer;
    &:hover{
    background: #e5e6e6;
    }
 `;

class Search extends Component {
  state = {
    query: '',
    results: [],
    modal: false,
    myQuery: [
      {
        name: 'Leonard',
      },
      {
        name: 'Walker',
      },
      {
        name: 'Lance',
      },
      {
        name: 'Rudyard',
      },
      {
        name: 'Chadwick',
      },
      {
        name: 'Isaiah',
      },
      {
        name: 'Griffith',
      },
      {
        name: 'Lawrence',
      },
      {
        name: 'Preston',
      },
      {
        name: 'Simon',
      }
    ]
  };

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
      results: this.state.myQuery
    });
  };

  showModalOpen = () => {
    this.setState({
      modal: !this.state.modal
    })
  };

  render() {
    const { query, results } = this.state;
    let users = results;
    query.trim().toLowerCase();
    if (query.length > 0) {
      users = users.filter(function(user) {
        return user.name.toLowerCase().match(query);
      });
    }
    return (
      <Container>
        <ContainerSearch>
          <Input
            type="text"
            value={ query }
            onChange={ this.handleInputChange }
            placeholder="Search..."
          />
          <Suggestions>
            { users.map((item, key) => {
              return (
                <ContainerSuggest key={ key } onClick={ this.showModalOpen }>
                  { item.name }
                </ContainerSuggest>
              );
            }) }
          </Suggestions>
          { this.state.modal &&
          <Popup
            text='Close Me'
            closePopup={ this.showModalOpen }
          />
          }
        </ContainerSearch>
      </Container>
    );
  }
}

export default Search;
