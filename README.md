# react-shared-component-library

React shared component library implemented through a mono-repo with TypeScript, Storybook, React Testing Library, Lerna and Rollup.

## Application purpose

React shared component library purpose is to help bootstrap new React shared component libraries with a mono-repo configuration in a simple and fast way. This library can also be considered a boilerplate library with all the preferred development configurations, folder structure and tools in place and ready to start coding.

Please, bear in mind that this library is always evolving and new tools may be added along the way.

## Application Tech Stack

- `React` framework (with Typescript) for the overall component development;
- `Typescript` coding language;
- `SASS` style pre-processor to build the needed application styles;
- `Storybook` to showcase the library's components in a catalog that allows not only to visualize the components but also to tweak their properties;

## Application Support tools

- `Lerna` to manage the component builds and publish in the generated packages into a registry;
- `Rollup` to bundle the components into packages, ready to be published;

## Application Testing tools

- `Jest` javascript testing framework;
- `React Testing Library` testing framework for working with React components;

## Application scripts

### Installation and component development

From the project root folder, please execute the following commands in a terminal window:

```bash
# install the library's dependencies
npm i

# start the library in development mode
npm run storybook
```

Once Storybook is opened in your browser window you can edit your components code and the changes will be reflected immediately in Storybook.

```bash
# build and publish a version of the library for distribution
npm run lerna:publish
```

### Testing

```bash
# run the library's unit tests
npm run test

# run the library's unit tests and present a code coverage report
npm run test:coverage
```
