exports.definition = {
	config: {
		columns: {
		    "id": "string",
		    "name": "string",
		    "slug": "string",
		    "description": "text",
		    "external_url": "string",
		    "state": "string",
		    "start_time": "string",
		    "end_time": "string",
		    "logo": "string",
		    "students_only": "boolean",
		    "total_hackers": "integer",
		    "total_hacks": "integer",
		    "location": "object"
		},
		adapter: {
			type: "properties",
			collection_name: "hackathon"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

