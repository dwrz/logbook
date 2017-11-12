const serverURL = 'http://127.0.0.1:3000';
const POST = '/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  onChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  submit () {
    this.props.login(this.state.username);
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">Username:</span>
        <input value={this.state.username} onChange={this.onChange.bind(this)} type="text" className="form-control"/><button className="btn btn-success" onClick={this.submit.bind(this)}>Submit</button>
      </div>
    );
  }
}
