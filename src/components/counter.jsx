import React, {Component} from'react';

class Counter extends Component{
    state = {
        value:this.props.value, //changing to count to value for cleaner code and understanding code.
 tags:['tag1', 'tag2', 'tag3']
    };

    //constructor(){
      //  super();
        //this.handelIncrement = this.handelIncrement.bind(this);
    //}


handelIncrement =(product)=>{
    console.log(product);
    this.setState({value: this.state.value + 1});
};

doHandelIncrement=()=>{
  this.handelIncrement({id:1});
};
    render() {
        console.log(this.props);

        return (
        <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.doHandelIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {this.state.tags.map(tag =><li key={tag}>{ tag }</li>)}
        </ul>

        </div>
    );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value} = this.state;
        return value ===0? "Zero" : value;
    }
}
export default Counter;
