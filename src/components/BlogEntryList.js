import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';

const BlongEntryList = ({ blog }) => {
  const {
    timeToRead,
    fields: { slug },
    frontmatter: { title, author, date },
  } = blog;

  return (
    <Card>
      <Card.Image
        size={128}
        src="https://assets.goodstatic.com/s3/magazine/others/meta/GoodLogo2.png"
      />
      <Card.Content>
        <Content>
          {title} ~ <span>{timeToRead} minutes read</span> <br />
          <time dateTime={date}>{date}</time>
        </Content>
      </Card.Content>
    </Card>
  );
};

export default BlongEntryList;
