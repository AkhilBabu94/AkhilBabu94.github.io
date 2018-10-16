var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render:function(){
        return (
            <h4 className={this.props.item.purchased ? "strikethrough" : ""}><div>{this.props.item.name}</div></h4>
        )}
})

 