
/*
(function() {
	var GroupView = Backbone.View.extend({
		template  : _.template($('#group-template').html())
	}),

	ItemView = Backbone.View.extend({
		template  : _.template($('#item-template').html())
	});
})();
*/
/*
  var CheckBoxListView = Backbone.View.extend({
    tagName   : 'li',
    events  : {
      'click input' : 'check'
    },

    initialize : function() {
      _.bindAll(this, 'remove');
      this.model.bind('remove', this.remove);
      this.model.view = this;
    },

    render : function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var ItemView = CheckBoxListView.extend({
    template  : _.template($('#list-item-template').html()),
    
    check : function() {
      Listie.Creator.calculateSelected();
    }
  });
*/