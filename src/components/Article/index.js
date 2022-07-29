import React from 'react';
import { RichText, Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
  <div>
    <p>Article Component</p>
    <Text field={props.fields.title} />
    <RichText field={props.fields.description} />
    <DateField field={props.fields.date} render={(date) => date.toUTCString()} />
    {console.log(props.fields.relatedArticles)}
    {props.fields.relatedArticles &&
      props.fields.relatedArticles.map((item, index) => {
        return (
          <div key={index}>
            <Text field={item.fields.pageTitle} />
          </div>
        );
      })}
  </div>
);

export default Article;
