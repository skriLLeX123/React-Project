import React, { Component } from 'react';


class Blog3 extends Component {
  render() {
    return (
      <div className="item1">
      <table className="javascrpt">

      <tr><td><img src={require('./images/AI.jpg')} alt=" " width='100' height='100'/><h1>
      Artificial Intelligence</h1></td><td className="date">03/30/2018</td></tr>
      <tr><td colspan='2' className="td1">
      <p>Artificial intelligence is a branch of computer science that aims to create intelligent machines. It has become
       an essential part of the technology industry. Artificial intelligence (AI) makes it possible for machines to learn
       from experience, adjust to new inputs and perform human-like tasks. Most AI examples that you hear about today – from
        chess-playing computers to self-driving cars – rely heavily on deep learning and natural language processing. Using
        these technologies, computers can be trained to accomplish specific tasks by processing large amounts of data and recognizing
        patterns in the data.</p>
      </td></tr>

      <tr><td><img src={require('./images/ml.png')} alt=" " width='120' height='100'/><h1>
      Machine Learning</h1></td><td className="date">03/30/2018</td></tr>
      <tr> <td colspan='2' className="td1">
      <p>Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine
      learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding
      of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it.
      Many researchers also think it is the best way to make progress towards human-level AI. Machine learning focuses on the development
      of computer programs that can access data and use it learn for themselves. The process of learning begins with observations or data,
      such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future
      based on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or
      assistance and adjust actions accordingly.</p></td>
       </tr>

       <tr><td><img src={require('./images/cloudcomputing.png')} alt=" " width='120' height='120'/><h1>
       Cloud Computing</h1></td><td className="date">03/30/2018</td></tr>
       <tr> <td colspan='2' className="td1">
       <p>SCloud computing is the on-demand delivery of compute power, database storage, applications, and other IT resources through
        a cloud services platform via the internet with pay-as-you-go pricing. In the simplest terms, cloud computing means storing and
        accessing data and programs over the Internet instead of your computers hard drive. The cloud is just a metaphor for the Internet.
        With cloud computing, you don’t need to make large upfront investments in hardware and spend a lot of time on the heavy lifting of
        managing that hardware. Instead, you can provision exactly the right type and size of computing resources you need to power your
        newest bright idea or operate your IT department. </p></td>
        </tr>
       </table>
      </div>
    );
  }
}

export default Blog3;
