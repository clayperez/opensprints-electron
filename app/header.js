var m = require('mithril');

module.exports = {
  controller: function(){
    this.appNav = [
      {
        href: '/',
        label: 'home'
      },
      {
        href: '/roster',
        label: 'roster'
      },
      {
        href: '/default-settings',
        label: 'default settings'
      }
    ];
  },
  view: function(ctrl) {
    return m('.container', [
      m('img.logo', {src: __dirname + '/styles/logo_with_text.png'}),
      m('.navbar-header', [
        m('button', {
          className: 'navbar-toggle',
          type: 'button',
          'data-toggle': 'collapse',
          'data-target': '#bs-navbar',
          'aria-controls': 'bs-navbar',
          'aria-expanded': 'false'
        }, [
          m('span.sr-only', 'Toggle navigation'),
          m('i.material-icons', 'menu')
        ])
      ]),
      m('nav', {
        id: 'bs-navbar',
        className: 'collapse navbar-collapse'
      }, [
        m('ul.nav.navbar-nav', [
          ctrl.appNav.map(function(navElem){
            return m('li', [
              m('a[href=' + navElem.href + ']', {config: m.route}, navElem.label)
            ]);
          })
        ])
      ])
    ]);
  }
};