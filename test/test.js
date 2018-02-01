
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><div class="up"></div><div id="divToLeft"></div><div id="divToRight"></div><script src="node_modules/chai-jquery/chai-jquery.js"></script></body></html>');

const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var $ = require('jquery');
const addictive = require('../src/addictive.js');
var expect = require('chai').expect;
const assert = require('chai').assert;
const chai = require('chai');
const chaiJquery = require('chai-jquery');

describe('addictive', function() {
  it('window height should be a number', function() {
    expect(window.scrollY).to.be.a('number');
  });
});


describe('addictive', function() {
  it('should work for any div', function() {
    expect($('#divToLeft').slideLeft).to.not.be.an('undefined');
  });
});

describe('addictive', function() {
  it('div position should be a number', function() {
    expect($('#divToRight').offset().top).to.be.a('number');
  });
});

