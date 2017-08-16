# svelte-static-site-example

An example of how to build a statically rendered web site with Svelte (http://svelte.technology). 

# Instructions

Install dependencies with

    npm install

Build with:

    ./node_modules/webpack/bin/webpack.js --config static.webpack.config.js
    ./node_modules/webpack/bin/webpack.js --config client.webpack.config.js

Serve with:

    cd build/static
    python -m SimpleHTTPServer 8081

