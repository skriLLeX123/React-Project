import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
      <div className="item1">
<table>
<tr><td><a href="/Blog1"><img src={require('./images/ang.png')} alt=" " width='150' height='150'/></a></td>
<td><a href="/Blog1"><img src={require('./images/nodejs.png')} alt=" " width='170' height='150'/></a></td>
<td><a href="/Blog1"><img src={require('./images/react.png')} alt=" " width='150' height='150'/></a></td></tr>
<tr><td><a href="/Blog2"><img src={require('./images/AI.jpg')} alt=" " width='120' height='120'/></a></td>
<td><a href="/Blog2"><img src={require('./images/ml.png')} alt=" " width='190' height='150'/></a></td>
<td><a href="/Blog2"><img src={require('./images/cloudcomputing.png')} alt=" " width='190' height='170'/></a></td></tr>
<tr><td><a href="/Blog3"><img src={require('./images/Azure cloud.png')} alt=" " width='170' height='120'/></a></td>
<td><a href="/Blog3"><img src={require('./images/awscloud.png')} width='170' alt=" " height='130'/></a></td>
<td><a href="/Blog3"><img src={require('./images/salesforce.png')} width='150' alt=" " height='130'/></a></td></tr>
</table>

      </div>
    );
  }
}

export default Homepage;
