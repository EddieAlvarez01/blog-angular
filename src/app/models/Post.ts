export class Post{

    constructor(
        public id: number,
        public user: string | number,
        public category: string | number,
        public title: string,
        public content: string,
        public image: string,
        public created_at: any
    ){}

}