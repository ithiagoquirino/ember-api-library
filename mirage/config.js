export default function() {
  this.urlPrefix = 'http://192.168.0.109:8081/api'
  this.timing = 300;

  this.get('/students', () => {
    return {
      'students': [
        {
          phone: "(13) 3252-4844",
          registration: "727456-623",
          email: "obiwan@gmail.com",
          name: "Obi Wan Kenobi",
          id: 1
        },
        {
          phone: "(41) 73296-4282",
          registration: "424126-123",
          email: "maul@sciensa",
          name: "Darth Maul",
          id: 2
        }
      ]
    };
  });

  this.get('/students/:student_id', () => {
    return {
      "student": {
        id: 50,
        name: "FFFf",
        registration: "AB-431",
        phone: "62-234123",
        email: "ff@gmail.com"
      }
    };
  });
 
  this.put('/students/:student_id', () => {
    return true;
  });
  
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
