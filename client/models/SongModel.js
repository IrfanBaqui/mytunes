// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.attributes.playCount = this.attributes.playCount + 1;
    this.trigger('play', this);
  },

  // ended: function(){
  //   this.trigg
  // }
  clicked: function(){
    this.trigger('clicked', this);
  },

  ended: function() {
    //pass this song model to the parent
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    //pass this song model to the parent
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    //pass this song model to the parent
    this.trigger('dequeue', this);
  }

});
