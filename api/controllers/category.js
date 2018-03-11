/**
 * Created by Karina on 11/01/2018.
 */
this.index = function (req, res) {
    db.Category.find({}, function (error, books) {
        if (error)
            return res.send([]);
        res.send(books);
    });
};
this.destroy = function (req, res) {
    db.Category.remove({_id: req.params.id}, function (err) {
        if (err)
            return res.json({success: false});
        return res.json({success: true});
    });
};
this.store = function (req, res) {
    let category = new db.Category({
        name: req.body.name
    });
    category.save(function (error) {
        if (error)
            return res.json({success: false});
        return res.json({success: true});
    });
};
this.edit = function (req, res) {
    db.Category.findById(req.params.id, function (error, category) {
        if (error)
            return res.json({});
        return res.json(category);
    });
};
this.update = function (req, res) {
    db.Category.findById(req.body._id, function (error, category) {
        if (error)
            return res.json({success: false});
        category.name = req.body.name;
        category.save(function (error) {
            if (error)
                return res.json({success: false});
            return res.json({success: true});
        });
    });
};