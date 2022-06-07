module.exports = [{
	name: 'H-Thai-ML',
	city: 'Seattle',
	state: 'WA',
	cuisines: 'Thai, Pan-Asian',
	pic: '/images/blue-fin-restaurant.webp'
    }, {
	name: 'Coding Cat Cafe',
	city: 'Phoenix',
	state: 'AZ',
	cuisines: 'Coffee, Bakery',
	pic: '/images/ginger-cat-looks-laptop-screen-260nw-1893948898.webp'
    }]

	router.put('/:id', (req, res) => {
		let id = Number(req.params.id)
		if (isNaN(id)) {
			res.render('error404')
		}
		else if (!places[id]) {
			res.render('error404')
		}
		else {
			// Dig into req.body and make sure data is valid
			if (!req.body.pic) {
				// Default image if one is not provided
				req.body.pic = '/images/image.jpg'
			}
			if (!req.body.city) {
				req.body.city = 'Anytown'
			}
			if (!req.body.state) {
				req.body.state = 'USA'
			}
	  
			// Save the new data into places[id]
			places[id] = req.body
			res.redirect(`/places/${id}`)
		}
	  })
	  
	  