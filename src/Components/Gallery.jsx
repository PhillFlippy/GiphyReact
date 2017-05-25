import React, { Component } from 'react';

import '../Gallery.css';



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
            return (
              <div key={k}  >

              <a href={image.url}>  <img src={image_url} alt={image.slug} className='box'/></a>
              </div>
            )
          })
        }
      </div>
    );

}
}

export default Gallery;
