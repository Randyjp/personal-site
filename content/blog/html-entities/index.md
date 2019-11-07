---
title: HTML ENTITIES
author: [RandyPerez]
date: '2019-10-07'
featuredImage: './books.jpg'
shortDescription: 'What are they? Should you use them?'
tags: ['html', 'web development']
---

If you have done some web development, you've probably seen some mysterious strings used in HTML, like `&amp;` or `&#38;`. You rushed to Google, found out that they are called **HTML Entities** then, ignored their existence until they popped again within a few weeks. In my opinion, that's perfectly fine since nowadays developers don't need to know a whole lot about them to be productive, however, I got curious and decided to explore a little further.

## What are they?

HTML entities are special letter sequences used to display reserved characters, invisible characters, or symbols not present in the user's keyboard. They start with an **ampersand(&)** and end with a **semicolon(;)**.

For instance, Let's say we want to embed the following expression in our HTML: `5 < 3`. Instead of using the `<` sign(literally), which is an HTML reserved symbol, we should replace it for its equivalent entity, `&lt;`. If we think about it, the less than symbol( < ) could represent the beginning of an HTML tag or the character literal, thus using an entity makes our intention clear.

Another important use is when you need symbols that your keyboard doesn't have. For example, the Chinese character `思` can be replaced by the `&#24605;` entity or the Spanish `á` for `a&#769;`.

## Entity Name VS Entity Number

One small detail that threw me off a few times is that some entities can be represented by a name or a number; they are functionally equivalent. Every entity has a number but not a name. We can render a greater than symbol **(>)** by using `&#62;` or `&gt;`. Click [here](https://www.freeformatter.com/html-entities.html) for a complete list of entities.

## Do you really need them?

Well, as with most things, it depends! A few years ago, when a lot of text editors and browsers didn't have Unicode support, entities were a MUST use if you wanted to make sure that users across the globe could consume your website. Nowadays UTF-8 and other Unicode standards rule the land of the internet(most of it at least), thus you are better off using literal characters instead of entities.

So Unicode killed the HTML entity? Well...not really! If you need to escape HTML special characters (like `&` or `"`), entities are the way to go. Remember, they make your intentions more clear by reducing ambiguities in your HTML.

Further reading on this: [UTF-8: The Secret of Character Encoding
](http://htmlpurifier.org/docs/enduser-utf8.html) and [When should one use HTML entities?](https://stackoverflow.com/questions/436615/when-should-one-use-html-entities).

## Takeaways - Conclusion

- Unicode all the things
- Use Entities to escape special characters
- Use character literals for everything else
- Entities help you to be explicit
