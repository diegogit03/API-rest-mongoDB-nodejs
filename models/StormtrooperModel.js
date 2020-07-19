function StormtrooperModel(mongo){
    this.mongo = mongo;
};

StormtrooperModel.prototype.find = (query, callback)=>{
    this.mongo.collection('stormtroopers').find(query, callback);
};
StormtrooperModel.prototype.findOne = (_id, callback)=>{
    var query = {_id: this.mongo.ObjectId(_id)};
    this.mongo.collection('stormtroopers').findOne(query, callback);
};
StormtrooperModel.prototype.create = (data, callback)=>{
    this.mongo.collection('stormtroopers').insert(data, callback);
};

StormtrooperModel.prototype.update = (_id, data, callback)=>{
    var query = {_id: this.mongo.ObjectId(_id)};
    this.mongo.collection('stormtroopers').update(query, data, callback);
};

StormtrooperModel.prototype.remove = (_id, callback)=>{
    var query = {_id: this.mongo.ObjectId(_id)};
    this.mongo.collection('stormtroopers').remove(query, callback);
};

module.exports = function(mongo){
    return new StormtrooperModel
};