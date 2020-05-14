const express = require('express')
const fs = require('fs')

const router = express.Router()

///// high level : execute once ///////
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

//////////////////////////////////////

/////////// GET ALL TOURS ///////////
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  })
}

/////////// GET ONE TOUR ///////////
const getOneTour = (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find((el) => el.id === id)

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(200).json({
    status: 'success',
    data: { tour },
  })
}

/////////// CREATE ONE TOUR ///////////
const createTour = (req, res) => {
  //   console.log(req.body)
  const newID = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newID }, req.body)
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
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(200).json({
    status: 'success',
    data: { tour: '<UPDATE HERE>' },
  })
}

/////////// DELETE TOURS ///////////
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(204).json({
    status: 'success',
    data: null,
  })
}
//////////////////////////////////////

router.route('/').get(getAllTours).post(createTour)
router.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour)

module.exports = router
