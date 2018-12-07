import React from 'react';
// import { Card, Content } from 'react-bulma-components';
import 'bulma/css/bulma.css';

const BlongEntryList = ({ blog }) => {
  const {
    timeToRead,
    fields: { slug },
    frontmatter: { title, author, date },
  } = blog;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img
            src="https://assets.goodstatic.com/s3/magazine/others/meta/GoodLogo2.png"
            alt="bulma is good"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h2>{title}</h2> <span>{timeToRead} minutes</span> <br />
          <time dateTime={date}>{date}</time>
        </div>
      </div>
    </div>
  );
};

// const BlongEntryList = ({ blog }) => {
//   const {
//     timeToRead,
//     fields: { slug },
//     frontmatter: { title, author, date },
//   } = blog;

//   return (
//     <Card>
//       <Card.Image
//         size="4by3"
//         src="https://assets.goodstatic.com/s3/magazine/others/meta/GoodLogo2.png"
//       />
//       <Card.Content>
//         <Content>
//           {title} <br />
//           <time dateTime={date}>{date}</time>
//         </Content>
//       </Card.Content>
//     </Card>
//   );
// };

export default BlongEntryList;
