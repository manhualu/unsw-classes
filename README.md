# unsw-classes

# How to run the program

## Step 1.

Make sure you have `http-server` install by typing `npm install -g http-server`

## Step 2.

Change into the working directory where the `index.html` lives.

## Step 3.

Start your http server by issuing `http-server -c-1`

This spins up a Node.js httpd which serves the files in your directory as static files accessible from http://localhost:8080

## NOTE for TailwindCSS

- For TailwindCSS to be applied to the tags in the index.html, run `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch` in the root directory.
