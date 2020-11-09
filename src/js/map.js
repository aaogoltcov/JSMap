'use strict'

export class ErrorRepository {
    constructor() {
        this.mistakeCodes = new Map([
            [100, "Continue"],
            [101, "Switching Protocols"],
            [102, "Processing"],
            [103, "Early Hints"],
        ]);
    }

    translate(code) {
        if (this.mistakeCodes.has(code)) {
            return this.mistakeCodes.get(code)
        } else {
            throw new Error("Unknown error")
        }
    }

}
