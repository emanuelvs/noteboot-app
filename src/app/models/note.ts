export class Note{

    private title: string;
    private content: string;
    private createdAt: string;

    constructor(title, content){
        this.title = title;
        this.content = content;
        this.createdAt = (new Date()).toLocaleDateString()
    }
    get() {
        return {
            title: this.title,
            content: this.content,
            cratedAt: this.createdAt
        }
    }
}