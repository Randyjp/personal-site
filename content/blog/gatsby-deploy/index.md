---
title: Gotchas when deploying Gatsby to Netlify
author: [RandyPerez]
date: '2019-04-22'
attachments:
  - './server.jpg'
shortDescription: 'Issues I found while deploying my site.'
tags: ['javascript', 'gatsby.js', 'react', 'web development', 'Netlify']
---

If you have been paying attention to the JavaScript community in the last year or so, you've probably heard a lot of [Gatsby.js](https://www.gatsbyjs.org/). In its core, Gatsby is a static site generator based on React and GraphQL that promises blazing fast performance out of the box. I have been impressed by the overall developer experience and the performance that it provides without much effort.

When it's time to [deploy](https://www.gatsbyjs.org/docs/deploying-to-netlify/) your newly built **static site** to the internet, the most popular option is [Netlify](https://www.netlify.com/) and with good reason. Netlify provides free hosting for Gatsby, basic CI/CD by default, it lets you preview your deploys, automatic form handling... and much more. It's by far the best experience I've had deploying a site and it's free!!

However, as good as it sounds, I ran into a few hiccups during my first deploy. Let's go through them, their cause and how to fix them.

##0 - Netlify uses Linux servers.

How is this a problem? It isn't. Developing using a different Operating System(than your deploy target) can result in some issues when your code hits the server. For instance, developers on Apple's OSX shouldn't expect their code to always run smoothly in a completely different system like Ubuntu or Debian.Utilities like vagrant and docker can help you bridge the gap between your local machine and the server you are deploying to.
##1 - Imports and Filenames Casing.

Imagine we have a file named "my_module.js" that we are importing into a different file; like this:

```javascript
const module = require('path/to/my_Module');
// or
import module from 'path/to/my_Module';
```

That works on OSX and windows but, Linux systems won't be able to find your module. Why? Because the casing matters. We are spelling "Module" with a capital "M" when the filename is all lowercase. As a result, you'll get a compile error since "my_Module" doesn't exists to Linux file system. It's really hard to debug this kind of problems; you might think files are not making it to the server or that GIT is playing tricks on your mind.

Bottom line, make sure your import's casing matches your filenames at all times.

##2 - Node Version

Netlify will do it's best to guess the proper version of Node it should use to make your site work. You don't want to leave that decision in the hands of luck or smart guesses; using a different major version can produce all kinds of trouble. To pin a specific version Node, include it in a ".nvmrc" file(commit this filet git) and you should be good to go. Use this command to generate the file with your current local version of Node:

```bash
$ node -v  > .nvmrc
```

## Conclusion

There are other issues that you can find while deploying Gatsby to Netlify; These are the ones that I had to deal with. Hopefully, this saves you some headaches during your deploy process.
