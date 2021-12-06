import React from 'react';
import { Table } from 'react-bootstrap';
// import ReactDatePicker from 'react-datepicker';
import './Autocomplete.css';
export default class Autocomplete extends React.Component{
  constructor (props){
    super(props);
    this.items = [
      'Tilapia',
      'Pangasius' ,
      'Rui' ,
      'Mrigel',
      'Koi',
      'Catla',
      'Silver Carp',
      'Carpio',
      'Grass Carp',
      'Big Head',
      'Black Carp',
      'Kali Baus',
      'Pabda',
      'Gulsha',
      'Shing',
      'Magur',
      'Shol',
      'Shorputi',
      'Bagdha',
      'Goldha',
      'Others'
  
    ];
    this.state = {
      suggestions: [],
    }
  }

  onTextChanged = (e) =>{
    const value = e.target.value;
    let suggestions = [];
    if (value.length>0){
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    if (value.length === 0){
      this.setState(()=> ({
        suggestions : [],
        text : ''
      }));
    }
    this.setState(() => ({suggestions, text: value}));
  }
  suggestionSelected (value){
    this.setState(()=>({
      text: value,
      suggestions: [],
    }))
  }

  renderSuggestions () {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return(
      <ul>
          {suggestions.map((item)=> <li onClick = {()=> this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  render (){
    const {text} = this.state;
    return(
      <div className = "search">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-9">
            <form>
            <input type="text" id="firstNumber" placeholder="Water area" onChange="multiplyBy()" maxlength="15" />
            <input type="text" id="secondNumber" placeholder="Water Depth" onChange="multiplyBy()" maxlength="15" />
            <input value = {text} onChange = {this.onTextChanged} type = "text" placeholder = "Problematic Species"></input>
            {this.renderSuggestions()}
            <input type="date" id="stockingDate" placeholder="Stocking Date" onChange="multiplyBy()" maxlength="15" />
            <input type="text" id="aeratorQuantity" placeholder="Aerator Quantity" onChange="oxygenBy()"maxlength="15" />
            <input type="text" id="aeratorCapacity" placeholder="Aerator Capacity"onChange="oxygenBy()" maxlength="15"/>
            <input type="text" id="culturePeriod" placeholder="Culture Period"/>
            <input type="text" id="stockingQuantity" placeholder="Stocking Quantity"/>
            </form>
            <br/>
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Problematic Species</th>
                <th>Total Pc</th>
                <th>Stocking Size</th>
                <th>Present Size</th>
                <th>Harvest Size</th>
                <th>Stocking Density</th>
                <th>Present Biomass</th>
                <th>Harvest Biomass</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type = "text" placeholder = "species"></input></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
                      </div>
            <div className = "col-md-3 text-start">
            <p>The Water Volume is : <br/>
                    O<sub>2</sub> Production (tentitive):
                    <br/>
                    Total O<sub>2</sub> demand:
                    <br/>
                    Total O<sub>2</sub> demand harvest size:
                    <br/>
                    Zonewise Fish Distribution:
                    <br/>
                    Upper layer: <br/>
                    Mid Layer: <br/>
                    Bottom Layer: <br/>
                    Rmd Feed size: <br/>
                    Solution:
                    </p>
             </div>
          </div>
        </div>
      </div>
    )
  }

}

