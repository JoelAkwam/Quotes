export class Quotes {
    upvotes:number
    downvotes:number
    myDate:Date
    constructor(public publisher:string,public author:string, public quote:string){
        this.upvotes=0
        this.downvotes=0
        this.myDate= new Date()
    }
}
