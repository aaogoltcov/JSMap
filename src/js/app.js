'use strict'

import { ErrorRepository } from './map'


let error = new ErrorRepository()
console.log(error.translate(100))
error.translate(500)



