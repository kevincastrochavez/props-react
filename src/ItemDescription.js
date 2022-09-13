import React, { Component } from 'react';

// CLASS-BASED COMPONENT

export default class ItemDescription extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}

// FUNCTIONAL COMPONENT

// function ItemDescription({ name, description }) {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>
//         <i>{description}</i>
//       </p>
//     </div>
//   );
// }

// export default ItemDescription;
