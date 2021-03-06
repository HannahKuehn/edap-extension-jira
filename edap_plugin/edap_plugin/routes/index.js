import data from './questionsjson.js'

export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/checklist', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
        // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.

        res.render(
          'checklist.hbs', // change this to 'hello-world.jsx' to use the Atlaskdkit & React version
          data
          );

        
    });

    /*app.get('/hello-world', addon.authenticate(), (req, res) => { 
      res.render('test.hbs', { 
         array: ['One', 'Two', 'Three', 'Four'], 
         message: 'Greetings from geekforgeeks'
      }) ;
  }); */

    // Add additional route handlers here...
}
