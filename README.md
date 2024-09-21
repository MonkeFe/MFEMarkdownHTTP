# MonkeFe Markdown HTTP Server
This is a containerized version of a `node.js` server that serves markdown files as HTML. The server is based on the `express` framework and uses the `marked` library to parse the markdown files. The server is expected to visualize markdown, PDFs and images.
## How to use
### Build the image
```bash
docker build -t .
```
### Run the container
```bash
docker run -d -p 3000:3000 -v <TODO> -e <TODO> 
```
or using `docker-compose`:
```yaml
<TODO>
```
### TODO
- [ ] Write example for `docker run` and `docker-compose`
- [ ] Add support for images
- [ ] Handle better the LaTeX rendering
- [ ] **Implement link substitution:**
    - Many note-taking systems (e.g. Obsidian) use a special syntax for links that is not supported by `marked`. Implement a way to substitute these links with the correct ones.

