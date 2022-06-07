module.exports = [{
	name: 'H-Thai-ML',
	city: 'Seattle',
	state: 'WA',
	cuisines: 'Thai, Pan-Asian',
	pic: '/images/h-thai-ml-tables.jpg'
    }, {
	name: 'Coding Cat Cafe',
	city: 'Phoenix',
	state: 'AZ',
	cuisines: 'Coffee, Bakery',
	pic: '/images/coffee-cat.png'
    }]

	router.get('/:id/edit', (req, res) => {
		let id = Number(req.params.id)
		if (isNaN(id)) {
			res.render('error404')
		}
		else if (!places[id]) {
			res.render('error404')
		}
		else {
		  res.render('places/edit', { place: places[id] })
		}
	  })
	  