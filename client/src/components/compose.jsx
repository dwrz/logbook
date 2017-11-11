class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      description: ''
    };
  }

  onChangeEvent(event) {
    this.setState({
      event: event.target.value
    });
  }

  onChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  submit() {
    let entry = {
      timestamp: new Date(),
      event: this.state.event,
      description: this.state.description
    };
    this.props.submit(entry);
  }  

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Event</label>
            <input value={this.state.event} onChange={this.onChangeEvent.bind(this)} type="text" className="form-control" aria-label="event" aria-describedby="event"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea value={this.state.description} onChange={this.onChangeDescription.bind(this)} className="form-control" rows="4"></textarea>
          </div>
        </form>
        <div className="text-center">
          <button onClick={this.submit.bind(this)} type="button" className="btn btn-lg btn-success">Submit</button>
        </div>
      </div>
    );
  }
}
