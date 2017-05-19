import React, { Component } from 'react';

import '../Gallery.css';
import Nav from './Nav.jsx';


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const {gallery} = this.props;
    return (
      <div className="wraps">{
          gallery.map((image, k) => {
            const image_url = image.images.fixed_height.url;
              console.log('image url ' + image_url);
            return (
              <div key={k}  >

              <a href={image.url}>  <img src={image_url}  className='box'/></a>
              </div>
            )
          })
        }
      </div>
    );

}
}

export default Gallery;
