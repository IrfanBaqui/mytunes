var LibraryFormView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();
  },

  events: {
    'click .lib_btn': 'createLibrary'
  },

  createLibrary: function() {
    this.trigger('createLibrary', this);
  },

  render: function() {
    this.$el.html('<form><input id="libraryName" type="text"><button class="lib_btn" type="button">Submit</button></form>');
  }

});
