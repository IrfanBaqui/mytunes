// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<video controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  events: {
    'ended': 'ended'
  },

  ended: function(){
    this.model && this.model.ended();
  },

  render: function(){
    this.$el.attr('src', this.model ? this.model.get('url') : '');
    return this.$el;
  }

});
