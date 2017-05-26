import React, { Component } from 'react';

import '../Gallery.css';



class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const {gallery} = this.props; //recieved gallery as a prop so now we take it from the props using the es6 method.
    return (
      //loop through all of the data in the gallery array and display the image url and use the slug(image name) as the alt text
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
