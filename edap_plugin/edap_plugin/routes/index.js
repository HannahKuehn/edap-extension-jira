

export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/hello-world', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
        // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.
      var data = {
        questions: [
          {
            qid: '0',
            question: 'Users can interact with the system',
            subquestions: [
              {
                qid: '0_0',
                question: 'Data about the user is collected',
                consequence:"User could be unaware of the usage of their data"
              },
              {
                qid: '0_1',
                question: 'The provided service changes depending on the data that is collected from the user',
                consequence:"Users may be discriminated"
              }
            ]
          },
          {
            qid: '1',
            question: 'The system has social network features',
            subquestions: [
              {
                qid: '1_0',
                question: 'Content is curated by an algorithm',
                consequence:"user may get stuck in a bubble, extremist content can be amplified"
              },
              {
                qid: '1_1',
                question: 'Users can depict unrealistic or selective versions of themselves/their lives',
                consequence:"Mental Health problems can occur when users feel like they are less than other users"
              }
            ]
          }
        ],
          title: 'EDAP'
        };

        

        res.render(
          'hello-world.hbs', // change this to 'hello-world.jsx' to use the Atlaskdkit & React version
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
