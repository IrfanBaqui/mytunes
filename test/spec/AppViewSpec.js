describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new AppModel({library:
      new Songs([
        {
          url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
          title: "One In A Million",
          artist: "Aaliyah",
        },
        {
          url: "http://www.amclassical.com/mp3/amclassical_prelude_in_c_major_bwv_846a.mp3",
          title: "Prelude in C Major",
          artist: "Johann Sebastian Bach",
        },
        {
          url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
          title: "Hot Like Fire",
          artist: "Aaliyah",
        },
        {
          url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
          title: "If Your Girl Only Knew",
          artist: "Aaliyah",
        }
      ])
    });
    appView = new AppView({model: app});
  });

  it('should generate a PlayerView when created', function(){
    expect(appView.playerView).to.be.an.instanceof(PlayerView);
  });

  describe('when the currently playing song changes', function() {
    it('updates current song in playerView', function(){
      var song = app.get('library').at(0);
      expect(appView.playerView.model).to.not.equal(song);
      song.play();
      expect(appView.playerView.model).to.equal(song);
    });
  });

});
