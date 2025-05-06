const express = require('express');
const router = express.Router();
const path = require('path');
const employeesController = require('../../controllers/employeesController');
const e = require('express');

router.route('/')
    .get(employeesController.getAllEmployees) // get all employees
    .post(employeesController.createNewEmployee) // create new employee
    .put(employeesController.updateEmployee) // update employee
    .delete(employeesController.deleteEmployee); // delete employee

router.route('/:id')
    .get(employeesController.getEmployee); // get employee by id

module.exports = router;