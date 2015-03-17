// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');

var World = React.createClass({

  render: function() {
    var className = 'world';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    return (
      <svg version="1.1" x="0px" y="0px" className={className}
      	 viewBox="0 0 282 282" enable-background="new 0 0 282 282">
      <path fill="#000000" d="M210.2,197.4c4.9-15.1,7.8-31.4,8.6-48.3h44c-1.2,17.4-6.2,33.7-13.9,48.3H210.2z M174,258.3
      	c12-12,22.1-26.7,29.5-43.4h34.2C221.9,235.6,199.6,251,174,258.3 M43,214.9h33.8c7.5,16.6,17.4,31.3,29.4,43.2
      	C80.8,250.7,58.7,235.4,43,214.9 M31.8,197.4c-7.7-14.6-12.6-30.9-13.9-48.3h43.6c0.8,16.9,3.7,33.2,8.6,48.3H31.8z M31.7,83.2h38.4
      	c-4.9,15.1-7.8,31.4-8.6,48.3H18.1C19.3,114.2,24,97.8,31.7,83.2 M106.2,22.6c-12,11.9-21.9,26.5-29.4,43.1H43.1
      	C58.8,45.2,80.9,30,106.2,22.6 M237.7,65.7h-34.3c-7.5-16.6-17.6-31.3-29.6-43.3C199.4,29.7,221.8,45,237.7,65.7 M149.1,131.5V83.2
      	h42.2c5.5,15,8.9,31.3,9.8,48.3H149.1z M149.1,197.4v-48.3h52.1c-0.9,17-4.2,33.3-9.7,48.3H149.1z M149.1,256.5v-41.6h34.7
      	C175,231.9,163.1,246.3,149.1,256.5 M131.6,214.9v41.8c-14.2-10.2-26.1-24.7-35.1-41.8H131.6z M131.6,149.1v48.3H88.8
      	c-5.5-15-8.9-31.4-9.7-48.3H131.6z M131.6,83.2v48.3H79.1c0.9-17,4.3-33.3,9.8-48.3H131.6z M131.6,24v41.6h-35
      	C105.5,48.6,117.5,34.2,131.6,24 M183.6,65.7h-34.5V24.5C163,34.6,174.8,48.8,183.6,65.7 M249,83.2c7.7,14.6,12.4,31,13.7,48.3
      	h-43.9c-0.8-16.9-3.7-33.2-8.6-48.3H249z M140.4,0C63,0,0,63,0,140.4c0,77.4,63,140.4,140.4,140.4c77.4,0,140.4-63,140.4-140.4
      	C280.8,63,217.8,0,140.4,0"/>
      </svg>

    );
  }

});

module.exports = World;
