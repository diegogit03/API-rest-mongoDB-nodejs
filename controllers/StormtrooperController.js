var debug = require('debug')('livro_nodejs:controller');
function StormtrooperController(StormtrooperModel){
    this.model = StormtrooperModel;
};

StormtrooperController.prototype.getAll = function(req, res, next){
    this.model.find({}, (err, data)=>{
        if(err){
            return next(err);
        }
        res.json(data);
    });
};

StormtrooperController.prototype.getById = function(req, res, next){
    var _id = req.params._id;
    this.model.findOne(_id, (err, data)=>{
        if(err){
            return next(err);
        }
        if(!data){
            var err = new Error('Not Found');
            err.status = 404;
            return next(err);
        }
        res.json(data);
    });
};

StormtrooperController.prototype.create = function(req, res, next){
    var body = req.body;
    this.model.create(body, (err, data)=>{
        if(err){
            return next(err);
        }
        res.json(data);
    });
};

StormtrooperController.prototype.update = function(req, res, next){
    var _id = req.params._id,
        body = req.body;
    this.model.update(_id, body, (err, data)=>{
        if(err){
            return next(err);
        }
        res.json(data);
    });
};

StormtrooperController.prototype.remove = function(req, res, next){
    var _id = req.params._id;
    this.model.remove(_id, (err, data)=>{
        if(err){
            return next(err);
        }
        res.json(data);
    });
};

module.exports = (StormtrooperModel)=>{
    return new StormtrooperController(StormtrooperModel)
};