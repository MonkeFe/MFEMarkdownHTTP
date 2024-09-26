# MonkeFe Markdown HTTP Server
## Clone the repo
To correctly clone the repo, you need to clone the submodules as well:
```bash
git clone --recurse-submodules <URL>
```
This is a containerized version of a `node.js` server that serves markdown files as HTML. The server is based on the `express` framework and uses the `marked` library to parse the markdown files. The server is expected to visualize markdown, PDFs and images.
## How to use
### Build the image
```bash
docker build -t mfe-markdown-http-* .
```
### Run the container
#### Detached 
```bash
docker run -d -p 3000:3000 -v '/path/to/files:/app/files' mfe-markdown-http-*
```
#### `docker-compose` (recommended)
For custom builds:
```yaml
services:
  web:
    build: . 
    environment:
      - USER=${USER}
      - HASHED_PASSWORD=${HASHED_PASSWORD}
    volumes:
      - ./files:/app/files
    ports:
      - "3000:3000"
```
Or use prebuilt images:
##### x86
```yaml
services:
  web:
    image: mfe-markdown-http-x86:latest
    environment:
      - USER=${USER}
      - HASHED_PASSWORD=${HASHED_PASSWORD}
    volumes:
      - ./files:/app/files
    ports:
      - "3000:3000"
```
##### ARM
```yaml
services:
  web:
    image: mfe-markdown-http-arm:latest
    environment:
      - USER=${USER}
      - HASHED_PASSWORD=${HASHED_PASSWORD}
    volumes:
      - ./files:/app/files
    ports:
      - "3000:3000"
```
### TODO
- [x] Write example for `docker run` and `docker-compose`
- [x] Add support for images
- [x] Handle better the LaTeX rendering
- [x] **Implement link substitution:**
    - Many note-taking systems (e.g. Obsidian) use a special syntax for links that is not supported by `marked`. Implement a way to substitute these links with the correct ones.
