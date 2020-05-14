const fs = require('fs')

///// high level : execute once ///////
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

/////////// CHECK ID ///////////

exports.checkID = (req, res, next, val) => {
  console.log(`tour id is ${val}`)
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }
  next()
}

/////////// CHECK POST BODY ///////////

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid BODY',
    })
  }
  next()
}

/////////// GET ALL TOURS ///////////
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  })
}

/////////// GET ONE TOUR ///////////
exports.getOneTour = (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find((el) => el.id === id)

  res.status(200).json({
    status: 'success',
    data: { tour },
  })
}

/////////// CREATE ONE TOUR ///////////
exports.createTour = (req, res) => {
  //   console.log(req.body)
  const newID = tours[tours.length - 1].id + 1
  const newTour = { id: newID, ...req.body }
  tours.push(newTour)
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      })
    }
  )
  //   res.send('Done')
}

/////////// PATCH TOURS ///////////
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tour: '<UPDATE HERE>' },
  })
}

/////////// DELETE TOURS ///////////
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  })
}
//////////////////////////////////////
