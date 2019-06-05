var express = require('express');
var router = express.Router();
var model = require('../models/index');
/* GET home page. */
router.post('/film', function(req, res, next) {
	console.log("************************", model);

	model.Films.create({
		title : req.body.title,
		description: req.body.description,
		image : req.body.image,
		url : req.body.url

	})
	.then(films => res.status(201).json ({
		error : false,
		data: films,
		message: 'le nouveau film a été ajouté'
	}))
	.catch(error => res.json({
		error:true,
		data : [],
		error : error
	}));
});



router.get('/films', function(req, res, next) {
	console.log("************************", model);

	model.Films.findAll({})
	.then(films => res.json ({
		error : false,
		data: films
	}))
	.catch(error => res.json({
		error:true,
		data : [],
		error : error
	}));
	console.log("************************", model);

});


router.put('/film/:id', function(req, res, next) {
	console.log("************************", model);

	model.Films.update({
		title : req.body.title,
		description: req.body.description,
		image : req.body.image,
		url : req.body.url

	},
	{
	where : {
		id: req.params.id
	}
})

	.then(films => res.json ({
		error : false,
		data: films,
		message: 'le  film a été modifié'
	}))
	.catch(error => res.json({
		error:true,
		data : [],
		error : error
	}));
	console.log("************************", model);


});


router.delete('/film/:id', function(req, res, next) {

	model.Films.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(films => res.json ({
		error : false,
		data: films,
		message: 'le  film a été supprimé'
	}))
	.catch(error => res.json({
		error:true,
		data : [],
		error : error
	}));
});

	module.exports = router;
