# Apollo UI - CSS Framework

This project provides the CSS framework and accompanying HTML reference for implementing the Apollo visual language to web applications.

## Getting started

### Get the CSS directly

If you're just looking for a stylesheet to drop into your project, then the place you should look is:

```
/dist/css/apollo.css
```

### Install via package management

Coming soon.

### CSS via CDN

Coming soon.

## Development server

Before documentation site locally, follow the instructions below to install the necessary dependencies.

### System dependencies:

We highly recommend installing these dependencies using a package management tool, such as APT, YUM or Homebrew (Mac).

- Ruby (v2.x.x)
- RubyGems (v2.x.x)
- Jekyll (v3.x.x)
- NodeJS (v4.x.x)

Not sure whether you have the correct version range installed?  Checking the version of each is a quick way to find out.

```
ruby --version
gem --version
jekyll --version
node --version
```

### Node dependencies

```
# Install Gulp globally
npm install --global gulp

# Install project dependencies (from package.json)
npm install
```

### Run Development server

The Jekyll site as well as the other build tasks are managed by Gulp.  The `serve` task will build the site, then start up a development server with live reload enabled.

```
gulp serve
```

### Other handy Gulp tasks

```
# Do all the things!
gulp

# Compile the apollo.css stylesheet
gulp apollo-styles

# Compile the docs.css stylesheet
gulp docs-styles

# Build the documentation site
gulp docs

# Run the Theo format conversions
gulp theo
```


