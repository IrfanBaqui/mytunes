var SongQueueEntryPlayCountView = Backbone.View.extend({
  // your code here!
  initialize: function(){
    this.model.on('play', function () {
      this.render();
    }, this);
  },


  tagName: 'tr',

  template: _.template('<td>(<%= playCount %>)</td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
