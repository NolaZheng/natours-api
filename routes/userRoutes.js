const express = require('express')
const fs = require('fs')

const router = express.Router()

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not yet implemented',
  })
}

const getOneUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not yet implemented',
  })
}

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not yet implemented',
  })
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not yet implemented',
  })
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not yet implemented',
  })
}

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser)

module.exports = router
