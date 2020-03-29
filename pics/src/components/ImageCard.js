import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = { span: 0 }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = e => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ span: spans });
  }

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;