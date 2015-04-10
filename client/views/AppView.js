// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.libraryFormView = new LibraryFormView({vent:params.vent});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    params.vent.on('createNewLibrary', function() {
      this.createNewLibrary();
    }, this);
  },

  createNewLibrary: function() {
    this.libraryView1 = new LibraryView({collection: this.model.get('library')});
    this.$el.append(this.libraryView1.$el);
  },

  render: function(){
    // this.$ = ('<form><input id="libraryName" type="text"><button class="lib_btn" type="button">Submit</button></form>');
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.libraryFormView.$el
    ]);
  }

});
