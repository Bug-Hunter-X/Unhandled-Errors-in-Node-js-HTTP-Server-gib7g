# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: insufficient error handling in HTTP servers.  The initial `server.js` showcases a basic server lacking robust error handling.  `serverSolution.js` provides a corrected version with improved error management.

## Problem

The original code lacks proper error handling for various scenarios such as network issues, file system errors, and unexpected exceptions within request handlers. This can lead to the server crashing silently or returning unexpected responses to clients.

## Solution

The improved code adds comprehensive error handling using `try...catch` blocks and event listeners for server errors.  This ensures graceful handling of exceptions, preventing crashes and providing informative responses to clients in case of failure.

## How to Run

1. Clone the repository.
2. Navigate to the directory.
3. Run `node server.js` (for the buggy version) or `node serverSolution.js` (for the corrected version).
