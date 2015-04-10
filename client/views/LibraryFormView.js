var LibraryFormView = Backbone.View.extend({

  tagName: "div",

  initialize: function(params) {
    this.render();
    this.vent = params.vent;
  },

  events: {
    'click .lib_btn': 'createLibrary'
  },

  createLibrary: function() {
    this.vent.trigger('createNewLibrary');
    console.log('from createLibrary');
  },

  render: function() {
    this.$el.html('<form><input id="libraryName" type="text"><button class="lib_btn" type="button">Submit</button></form>');
  }

});
