class Compose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Event</label>
            <input id="event" type="text" className="form-control" aria-label="event" aria-describedby="event"/>
          </div>
          <div className="form-group">
            <label>Entry</label>
            <textarea id="entry" className="form-control" rows="3"></textarea>
          </div>
        </form>
        <div className="text-center">
          <button id="submit" type="button" className="btn btn-lg btn-success">Submit</button>
          </div>
      </div>
    );
  }
}
