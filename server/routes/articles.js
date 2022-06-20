const express = require("express")
const router = express.Router();
const multer = require("multer");
const Articles = require("../model/articales");

// for image upload
const storage = multer.diskStorage({
    destination: function ( req, file, cb) {
        cb( null, "public" );
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage});

// Request to get all article

router.get("/articles", (req, res ) => {
    Articles.find()
    .then( article => res.json(article))
    .catch( err => res.status(400).json(` Error: ${err}`))
})

// Request to post airticle
router.post("/add", upload.single("articleImage"), (req, res) => {
    
    const newAirticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname,
        articleImage: req.file.originalname

    })
   newAirticle.save()
    .then( () => res.json("the article added successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`))
});
//Request to find by id
router.get("/articles/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then( (article)=> { res.json(article)} )
    .catch( err=> res.status(400).json(` Error: ${err}`))
})

//Request to find by id and update
router.put("/update/:id", (req,res) => {
    Articles.findById(req.params.id)
    .then(articles => {
        articles.title = req.body.title;
        articles.article = req.body.article;
        articles.authorname = req.body.authorname;
        // articles.articleImage = req.file.originalname;
        articles
        .save()
        .then( () => res.json(" the article is updated successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`))

    })

    .catch(err => res.status(400).json(`Error: ${err}`))
})
//Request to find by id and delete
router.delete("/articles/:id", ( req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then( () => res.json("article deleted successfully"))
    .catch( err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;