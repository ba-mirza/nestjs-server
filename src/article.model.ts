export class Article {

    public id: number
    public title: string
    public content: string

    constructor(title: string, content: string, id?: number) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}