class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener("keydown", this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener("keydown", this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
