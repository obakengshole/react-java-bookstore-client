const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080')
environmentUrls.set('react-java-bookstore-client.herokuapp.com', 'https://react-java-bookstore-client.herokuapp.com/')

export default environmentUrls.get(window.location.hostname)