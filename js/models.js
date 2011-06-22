(function() {
	/*
	var Markspec = Backbone.Model.extend({
		url : '/cstspadmin/questions/markspec_edit.cfm?method=saveMarkSpecItems',

		initialize : function() {			
			var self = this;
			//self.questions = new Questions;
			//self.questions.model = Question;
			
			self.items = new Item;
			self.items.url = '/cstspadmin/questions/markspec_edit.cfm?method=saveMarkSpecItems';
			self.items.model = Item;
		}
	}),
	
	Question = Backbone.Model.extend(),
	
	Item = Backbone.Model.extend()
	
  var Item = Backbone.Model.extend();

  Items = Backbone.Collection.extend({
    model : Item,

    selected : function() {
      return this.filter(function(item) { return $(item.view.el).find(':input').is(':checked'); });
    },

    removeSelected : function() {
      _.each(Listie.currentList.Items.selected(), function(item) { item.destroy(); });
    }
  });
  
  List = Backbone.Model.extend({
    initialize : function() {
      var self = this;
      if (!(self.get('items'))) self.set({ 'items': [] }, { silent: true });
      _.bindAll(self, 'updateItems');
      self.Items = new Items;
      self.Items.bind('reset',  self.updateItems);
      self.Items.bind('add',    self.updateItems);
      self.Items.bind('remove', self.updateItems);
    },

    url : function() { return this.isNew() ? '/lists' : '/lists/' + this.id; },

    updateItems : function() {
      this.set({ items : this.Items.map(function(item) { return item.get('name'); }) });
    }
  });
  */

/*
	Questions = Backbone.Collection.extend({
		url : '/cstspadmin/questions/markspec_edit.cfm?method=saveMarkSpecItems',
		model : Question
	}),

	Items = Backbone.Collection.extend({
		url : '/cstspadmin/questions/markspec_edit.cfm?method=saveMarkSpecItems',
		
		model : Item,

		initialize : function() {
			
		}
	});
*/
})();

/*

	method:getMarkSpec
	id:8
	
	
	method:createMarkGroup
	id:8
	data:{"name":"Group 2","criteriagroup_id":null}
	
	
	method:saveMarkGroups
	id:8
	data:[{"name":"Group 2","criteriagroup_id":null,"id":31}]
	
	
	method:saveMarkSpecItems
	id:8
	data:[{"criteriagroup_id":null,"markgroup_id":17,"question_id":10047,"sortorder":1,"active":true,"id":200},
		{"criteriagroup_id":null,"markgroup_id":17,"question_id":10049,"sortorder":3,"active":true,"id":202},
		{"criteriagroup_id":null,"markgroup_id":17,"question_id":10046,"sortorder":4,"active":true,"id":203},
		{"criteriagroup_id":null,"markgroup_id":17,"question_id":10050,"sortorder":5,"active":true,"id":204},
		{"criteriagroup_id":null,"markgroup_id":17,"question_id":10051,"sortorder":6,"active":true,"id":205}]
	
	
	method:saveMarkSpecItems
	id:8
	data:[{"criteriagroup_id":null,"markgroup_id":31,"question_id":10048,"sortorder":2,"active":true,"id":201}]

 */