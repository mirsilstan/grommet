// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var path = require('path');
var __path__ = path.join(__dirname, '../../src/js/components/LoginForm');

var GrommetTestUtils = require('../../src/utils/test/GrommetTestUtils');
var expect = require('expect');

describe('Grommet LoginForm', function() {
  it('loads a basic LoginForm component', function() {
    var Component = GrommetTestUtils.getComponent(__path__);

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
  });

  it('loads a LoginForm component with a logo', function() {
    var React = require('react/addons');
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      logo: <div>Logo</div>
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'login-form__logo', 'Logo');
  });

  it('loads a LoginForm component with a title', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      title: 'Title'
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'login-form__title', 'Title');
  });

  it('loads a LoginForm component with remember me enabled', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      rememberMe: true
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'login-form__remember-me', 'Remember me');
  });

  it('loads a LoginForm component with forgot password enabled', function() {
    var React = require('react/addons');
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      forgotPassword: <div>Forgot Password</div>
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'login-form__footer', 'Forgot Password');
  });

  it('loads a LoginForm component with errors', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      errors: ['This is a bad form']
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'login-form__error', 'This is a bad form');
  });

  it('loads a LoginForm component with pt-BR locale', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      locales: 'pt-BR'
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'button--primary', 'Logar');
  });

  it('loads a LoginForm component with pt-BR locale and custom messages', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      locales: 'pt-BR',
      messages: {
        'Log In': 'Logar Test'
      }
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'button--primary', 'Logar Test');
  });

  it('falls back to en-US for unsupported locales inside LoginForm component', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      locales: 'af'
    });

    GrommetTestUtils.componentShouldExist(Component, 'login-form');
    GrommetTestUtils.componentShouldExist(Component, 'button--primary', 'Log In');
  });

  it('submits a LoginForm with username and password', function(done) {
    var username = '';
    var password = '';

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var LoginForm = require(__path__);
    var _onSubmit = function(data) {
      username = data.username;
      password = data.password;
    };

    var Component = TestUtils.renderIntoDocument(
      <LoginForm onSubmit={_onSubmit} />
    );

    GrommetTestUtils.componentShouldExist(Component, 'login-form');

    var form = TestUtils.findRenderedDOMComponentWithTag(Component, 'form');
    Component.refs.username.getDOMNode().value = 'user';
    Component.refs.password.getDOMNode().value = '123';
    TestUtils.Simulate.submit(form);

    setTimeout(function() {
      expect(username).toBe('user');
      expect(password).toBe('123');
      done();
    }, 10);
  });
});
