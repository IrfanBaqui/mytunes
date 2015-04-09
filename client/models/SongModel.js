// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // ended: function(){
  //   this.trigg
  // }



  enqueue: function() {
    //pass this song model to the parent
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    //pass this song model to the parent
    this.trigger('dequeue', this);
  }

});
