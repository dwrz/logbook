const serverURL = 'http://127.0.0.1:3000';
const GET = '/api/log/entries/current/day';
const POST = '/api/log/entry';
const LOGIN = '/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      loggedIn: false,
      username: ''
    };
  }

  componentDidMount() {
    $.get(serverURL + LOGIN, (response) => {
      console.log(response);
      if (response === 'true') {
        this.setState({
          loggedIn: true
        });
      }
    });
    this.get();
  }

  get() {
    $.get(serverURL + GET, (response) => {
      this.setState({entries: response});
    });
  }

  login (username) {
    let user = {
      username: username
    };
    $.post(serverURL + LOGIN, user, (response) => {
      console.log(response);
      if (response === 'true') {
        this.setState({
          loggedIn: true,
          username: username
        });
        this.get();
      }
    });
  }

  submit (entry) {
    $.post(serverURL + POST, entry, (response) => {
      console.log(response);
      this.get();
    });
  }

  render() {
    return (
      <div>
        <div id='login'>
          {!this.state.loggedIn && <Login login={this.login.bind(this)}/>}
        </div>
        <div id='compose'>
          {this.state.loggedIn && <Compose submit={this.submit.bind(this)}/>}
        </div>
        <div id='logview'>
          {this.state.loggedIn && <LogView entries={this.state.entries}/>}
        </div>
      </div>
    );
  }
}
