import Student from './Student'

export default class MayStudent extends Student {
    constructor () {
        super('may', '女', '17')
    }
    getDescription () {
        return `hi!${super.getDescription()}`
    }
}
