# Contribute

This site is developed using Docusaurus.
To get started please read Docusaurus [getting started guide](https://docusaurus.io/docs/category/getting-started).

## Running locally

### Requirements

* Node >= 18

### Installation

```bash
git clone https://github.com/passbolt/passbolt_help.git
cd passbolt_help
npm install
```

### Running the development server

```bash
npm run start
```

### Build

```bash
npm run build
```

## Content management

### Edit existing content

To edit an existing content, go to /docs and navigate through the folders until you get to the markdown file to edit.

> See how Docusaurus handles markdown in [their documentation](https://docusaurus.io/docs/markdown-features) and edit the markdown file accordingly.

> See the [assets management section](#assets-management) if you need to add media to the file.

### Adding new content

#### Create the new file
To add new content, go to /docs and navigate to the folder where the new file needs to be created.
The new file should be a `.mdx` file with a front matter to configure the title, description, slug, sidebar label, etc.

#### File options

You can set different properties on the page through the front matter.

For example, if the page should not be indexed, excluded from the sitemap but only accessible via direct link, you can set the option `unlisted` to true.

> See the front matter options: [https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)

#### Going further

> See Docusaurus recommendations regarding the content creation: [https://docusaurus.io/docs/create-doc](https://docusaurus.io/docs/create-doc)

## Sidebar management

Our doc is separated into two main categories: Admin guide, User guide.

The first level of each category are registered in their respective *.sidebar.js (e.g.: admin.sidebar.js handles the admin guide sidebar). It offers the ability to define the order of the first levels.

All the other levels are auto-generated, which means they will appear automatically under the first level item. 

> See Docusaurus documentation about the sidebar: [https://docusaurus.io/docs/sidebar](https://docusaurus.io/docs/sidebar)

> Note: When a change happened at the sidebar level, a restart of the Docusaurus development server is needed to update the sidebar.

## Components

In addition to built-in Docusaurus components, we use custom React component to enhance some doc pages.

### Built-in components

The list of built-in components can be found here: [https://docusaurus.io/docs/markdown-features](https://docusaurus.io/docs/markdown-features)


### Custom components

|Component|Usage|
|:--------|:----|
|Badge|Used in the DistributionCard component|
|DistributionCard| Used to list Linux distributions where Passbolt can be installed|
|Figure| Used to add images with caption

Each custom components has its own module.css file for styling

## Styling

Custom css rules are applied to override the default look & feel of Docusaurus theme and components.

## Assets management

All the static assets are stored in the /static folder.

Images used in the doc file should be added to the /static folder, following the same folder structure as the documentation file.

> E.g.: I need to add an image to a documentation file located in /docs/admin/setup/configuration/firewall-rules.mdx. The image should be uploaded under /static/admin/setup/configuration/firewall-rules/filename.png.