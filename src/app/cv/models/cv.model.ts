export default class Cv {
    constructor(
        public id = 0,
        public name: string,
        public firstName: string,
        public age: number,
        public cin: string,
        public job: string,
        public path: string,
        public favoriteColor = "black"
    ) {
    }
}