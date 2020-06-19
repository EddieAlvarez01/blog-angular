export class User{

    constructor(
        public id?: number,
        public role?: number | string,
        public name?: string,
        public surname?: string,
        public email?: string,
        public password?: string,
        public password_confirmation?: string,
        public description?: string,
        public image?: string
    ){}

}