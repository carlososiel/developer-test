/**
 * Created by Karina on 11/01/2018.
 */
this.index = function (req, res) {
    db.Author.find({}, function (error, authors) {
        if (error)
            return res.send([]);
        res.send(authors);
    });
};
this.destroy = function (req, res) {
    db.Author.remove({_id: req.params.id}, function (err) {
        if (err)
            return res.json({success: false});
        return res.json({success: true});
    });
};
this.store = function (req, res) {
    let author = new db.Author({
        name: req.body.name
    });
    author.save(function (error) {
        if (error)
            return res.json({success: false});
        return res.json({success: true});
    });
};
this.edit = function (req, res) {
    db.Author.findById(req.params.id, function (error, author) {
        if (error)
            return res.json({});
        return res.json(author);
    });
};
this.update = function (req, res) {
    db.Author.findById(req.body._id, function (error, author) {
        if (error)
            return res.json({success: false});
        author.name = req.body.name;
        author.save(function (error) {
            if (error)
                return res.json({success: false});
            return res.json({success: true});
        });
    });
};