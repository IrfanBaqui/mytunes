// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function (model) {
      // console.log("model: ", model, "/nthis: ", this);
      // console.log("hi");
      console.log(this);
      this.remove(model);

    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }


});
