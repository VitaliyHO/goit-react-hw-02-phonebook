import React, { Component } from 'react';


class Output extends Component {

    state = {
    }

    arrayOfContacts = this.props.arrayOfContacts



    render() {
        return (
            <div>
                <ul>
                    {this.arrayOfContacts.map(() => {
                        return <li key={this.state.id}>
                            {this.state.name}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Output;