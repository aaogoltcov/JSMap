import { ErrorRepository } from '../map'
import {test} from "@jest/globals";

test('should error description', () => {
    let error = new ErrorRepository()
    expect(error.translate(100)).toBe("Continue")
    expect(error.translate(103)).toBe("Early Hints")
})

test('should unknown error', () => {
    let error = new ErrorRepository()
    expect(function () {
        error.translate(500)
    }).toThrow(new Error ("Unknown error"))
})
