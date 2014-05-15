var db = require('./index.js').db,
    expect = require('chai').expect;

describe('Neo4j database', function () {
  it('should save a node', function () {
    var node = db.createNode({ name: 'test' });
    node.save(function (err, node) {
      expect(err).to.equal(null);
      expect(node).to.have.property('id');
    });
  });
  it('should retrieve a node', function () {
    db.getIndexedNodes('node_auto_index', 'name', 'test', function (nodes) {
      expect(nodes).to.be.an('array');
      expect(nodes.length).to.equal(1);
      expect(nodes[0].name).to.equal('test');
    });
  });
});
