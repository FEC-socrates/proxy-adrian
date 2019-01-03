# proxy-adrian

> Renders all components for Robinshood onto one single page.

## Related Projects

  - https://github.com/FEC-socrates/buySell-feature
  - https://github.com/FEC-socrates/AboutAndNews-feature
  - https://github.com/FEC-socrates/lineGraph-feature

## Usage

If running for the first time:
  - Open up package.json in each component's repo and run commands to:
    - npm install dependencies for each component
    - Setup the database
    - Seed the database
  - Also run npm install for this proxy server
  - Run 'npm run build' for this proxy server. It will bundle up each component's JS files.

If the steps above have already been done:
  - Start each repo's server using the commands in each component's package.json (inclulding for each component and this proxy server)
  - Start this proxy server with 'npm run start'

To view Robinshood in your browser:
  - Go to localhost:6543 in your browser

## Requirements

This proxy server is built with React, Node, Express and bundles with Webpack. 

For each Component's requirements, please see their respective README files.

### Installing Dependencies

From each component's directory, as well as the directory for this proxy server, run 'npm install'.
