class CampsiteInfo {
  render() {
    if (this.props.campsite) {
      return <div className="row"></div>;
    } else {
      return <div></div>;
    }
  }
}

export default CampsiteInfo;
