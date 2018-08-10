require('./hackable-node')
const {ApolloServer} = require('apollo-server');

const Hackable = require('hackablejs')

const {Abstract} = require('./util')

class Application extends Abstract {



}

class Extension extends Abstract {

}

class PosterStack {

  constructor(typeDefs, resolvers) {
    this.hooks = new Hackable('poster')
    this.server = new ApolloServer({
      typeDefs,
      resolvers
    })
  }

  getServer() {
    return this.server
  }

  start() {
    this.server.listen().then(({url}) => {
      console.log(`Server ready at ${url}`)
    });
  }

}

exports = {PosterStack, Application, Extension}