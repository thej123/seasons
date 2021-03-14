import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return (
//         <div>Latitude: </div>
//     )
// }

// Class based component
// we are borrowing functions from the React.Component
class App extends React.Component {
    // Javascript function (not react)
    // constructor is the first method always called
    // constructor(props) {
    //     // this calls the React.Component's constructor method and gives it the props
    //     super(props);

    //     // This is only time we do direct assignment to the state
    //     this.state = { lat: null, errorMessage: "" };
    // }

    // This works because Babel will turn this state into a contructor along with super
    state = { lat: null, errorMessage: ""}

    componentDidMount() {
        console.log("Component did Mount")
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("component updated")
    }

    renderContent() {
        if ( this.state.errorMessage && !this.state.lat ) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if ( !this.state.errorMessage && this.state.lat ) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner/>
    }

    // React requires the render method will be there
    render () {
        // if ( this.state.errorMessage && !this.state.lat ) {
        //     return <div>Error: {this.state.errorMessage}</div>
        // }
        // if ( !this.state.errorMessage && this.state.lat ) {
        //     return <SeasonDisplay lat={this.state.lat}/>
        // }

        // return <Spinner/>

        // So that we have only one return statement
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)