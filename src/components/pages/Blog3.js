import React, { Component } from 'react';


class Blog3 extends Component {
  render() {
    return (
      <div className="item1">
      <table className="javascrpt">

      <tr><td><img src={require('./images/Azure cloud.png')} alt=" " width='170' height='70'/><h1>
      Microsoft Azure</h1></td><td className="date">03/30/2018</td></tr>
      <tr><td colspan='2' className="td1">
      <p>Microsoft has created very powerful and customizable tools for the professional data scientist with
      the Azure Machine Learning Workbench. The tool is used to create container images for Machine Learning
      or Artificial Intelligence models and exposing them as a REST API endpoints deployed and managed on an
      Azure Container Service. This is a very different approach than Azure Machine Learning Studio. In Studio,
      a model is created by the data scientist who then publishes that model as a REST API endpoint with the click
      of a button and the entire service is then managed by Azure.</p>
      </td></tr>

      <tr><td><img src={require('./images/awscloud.png')} alt=" " width='170' height='70'/><h1>
      Amazon Web Services</h1></td><td className="date">03/30/2018</td></tr>
      <tr> <td colspan='2' className="td1">
      <p>Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content
      delivery and other functionality to help businesses scale and grow.AWS was launched in 2006, and has since become
      one of the most popular cloud platforms currently available. AWS offers numerous advantages for organizations like
       reduced management overhead, simplified implementation, and significantly  reduced costs versus comparable legacy
       solutions. In fact, AWS has been such a game changer that many organizations are  eliminating on-prem data centers
       altogether in favor of hosted implementations from AWS.</p></td>
       </tr>

       <tr><td><img src={require('./images/salesforce.png')} alt=" " width='170' height='70'/><h1>
       salesforce</h1></td><td className="date">03/30/2018</td></tr>
       <tr> <td colspan='2' className="td1">
       <p>Salesforce is a cloud computing company which offers a variety of services (SaaS) and products (PaaS). Salesforce
        started as Software as a Service (SAAS) CRM company. Salesforce now provides various software solutions and a platform
         for users and developers to develop and distribute custom software. Below is an image of the power of Salesforce in
         today’s tech-savvy world. Salesforce offers cloud services like Sales Cloud which can be used by your organization’s
         Sales team, Marketing Cloud which can be used by your marketing team, Chatter a social application which your organization
         can use to connect employees and various other services.</p></td>
        </tr>
       </table>
      </div>
    );
  }
}

export default Blog3;
