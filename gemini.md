# GEMINI.md

## Project Overview

This is a personal blog project built with [Hugo](https://gohugo.io/), a static site generator. The site is hosted on GitHub Pages.

*   **URL:** https://wouerner.github.io/
*   **Theme:** [PaperMod](https://github.com/adityatelange/hugo-PaperMod/)
*   **Content:** The blog posts are located in the `content/posts` directory.

## Building and Running

To run the website locally for development, you can use the following Hugo command:

```bash
hugo server
```

This will start a local server, and you can view the site at `http://localhost:1313/`. The site will automatically reload when you make changes to the content or templates.

To build the static site for deployment, run:

```bash
hugo
```

This will generate the static files in the `public` directory.

## Development Conventions

### Creating New Posts

To create a new blog post, you can use the `hugo new` command:

```bash
hugo new posts/my-new-post.md
```

This will create a new Markdown file in the `content/posts` directory with the following front matter:

```markdown
---
title: "My New Post"
date: 2024-10-14T16:15:00-03:00
draft: true
---
```

*   **`title`**: The title of your blog post.
*   **`date`**: The date and time the post was created.
*   **`draft`**: Set to `true` by default. Change this to `false` when you are ready to publish the post.

### Content

The content of the blog posts is written in Markdown. You can use standard Markdown syntax to format your posts.

### Customization

The site's configuration can be found in the `hugo.yaml` file. You can modify this file to change the title, theme, and other site-wide settings.

The theme can be customized by overriding the templates in the `layouts` directory. You can find more information about customizing Hugo themes in the [Hugo documentation](https://gohugo.io/themes/customizing/).
