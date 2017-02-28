// Create a basic UriBuilder object that will be used specifically to build
// query params on an existing URI. It should support a params property and a
// build method. It will handle the URL having pre-existing params that need
// to be managed. The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")

// Examples of how the builder will be used:
// var builder = new UriBuilder('http://www.codewars.com')
// builder.params.page = 1
// builder.params.language = 'javascript'

// // new builder instance to demonstrate pre-existing params.
// builder = new UriBuilder('http://www.codewars.com?page=1')

// builder.params.page = 2
// // should return 'http://www.codewars.com?page=2'
// builder.build()

// // if you delete params then they will disappear from the url string
// delete builder.params.page
// // should return 'http://www.codewars.com'
// builder.build()

// Note: For extra style points you can have your solution handle array values
// as query parameters, however there are no tests that explicitly test for them.

class UriBuilder {
  constructor(url) {
    this.url = url;
    this.params = {
    }
  }

  build() {
    if (this.params.page && this.params.language) {
      return this.url + '?page=' + this.params.page + '&language=' + this.params.language;
    } else if (this.params.language) {
      return this.url + '?language=' + this.params.language;
    } else if (this.params.page) {
      return this.url + '?page=' + this.params.page;
    } else {
      return this.url;
    }
  }
}

var {test} = require('tap')

// BEGIN TEST ----------------------
// SETUP
// EXAMPLE OF USER INPUT

test('2 params', t => {
  var builder = new UriBuilder('http://www.codewars.com')
  builder.params.page = 1
  builder.params.language = 'javascript'
  // RESULT
  t.equal(builder.build(), "http://www.codewars.com?page=1&language=javascript")
  t.end()
})
// END TEST -----------------------

test('simple', t => {
  // BEGIN TEST ----------------------
  // SETUP
  // EXAMPLE OF USER INPUT
  var builder1 = new UriBuilder('http://www.codewars.com')
  // RESULT
  t.equal(builder1.build(), "http://www.codewars.com")
  t.end()
  // END TEST -----------------------
})

test('two', t => {
  var builder2 = new UriBuilder('http://www.codewars.com');
  builder2.params.page=2;
  t.equal(builder2.build(), "http://www.codewars.com?page=2");
  t.end();
})

test('three', t => {
  var builder3 = new UriBuilder('http://www.codewars.com');
  builder3.params.page=2;
  delete builder3.params.page
  t.equal(builder3.build(), "http://www.codewars.com");
  t.end();
})

test('four', t => {
  var builder4 = new UriBuilder('http://www.codewars.com');
  builder4.params.page=2;
  builder4.params.language = 'javascript'
  delete builder4.params.page
  t.equal(builder4.build(), "http://www.codewars.com?language=javascript");
  t.end();
})

test('random', t => {
  var builder5 = new UriBuilder('http://www.codewars.com');
  var randomParamName = 't' + Date.now()
  builder5.params[randomParamName] = 'test'
  t.equal(builder5.build(), `http://www.codewars.com?${randomParamName}=test`);
  t.end();
})
