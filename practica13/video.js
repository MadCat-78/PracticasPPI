// Aquí ponen todo su código
class LikeSystem{
    constructor(){this.likes=0;}

    like(){
        this.likes++;
    }

    dislike(){
        this.likes--;
    }
}


class Comment{
    constructor(user="",comm=""){
        this.user=user;
        this.comm=comm;
        this.LikeSystem=new LikeSystem();
    }

    printComment(comment){
        console.log(`${this.user}:${this.comm}`)
    }

    like(){
        this.LikeSystem.like();
    }
    disLike(){
        this.LikeSystem.dislike();
    }
}

class Video{
    constructor(seconds=0,name=""){
        this.name=name;
        this.seconds=seconds%60;
        this.minutes=Math.floor(seconds/60);
        this.LikeSystem=new LikeSystem();
        this.comments=[];
    }
    like(){
        this.LikeSystem.like();
    }
    disLike(){
        this.LikeSystem.dislike();
    }

    getCommentsNUm(){
        console.log(this.comments.length);
    }

    printTime(){
        console.log(`${this.minutes}:${this.seconds}`);
    }

    addComment(comment){
        this.comments.push(comment);
    }

    printComments(){
        for(let comment of this.comments){
            comment.printComment();
        }
        
    }

    likes(){
        return this.LikeSystem.likes;
    }


}

let com1= new Comment("Mario","el gato lo atacó");
let com2=new Comment("Horacio","Corre Forest, corre");
let com3=new Comment("Ana","Primer comentario");

let video1=new Video(847,"El bob esponja de los ojos hiperrealistas");
let video2=new Video(324,"El bob esponja de los ojos hiperrealistas");

// Al final descomenten la sección para que la prueben, no deberían tener errores usando las siguientes líneas de código

com1.printComment();
com2.printComment();
com3.printComment();
console.log(`El video1 tiene ${video1.likes()} likes`);
video1.printTime();
video1.addComment(com1);
video1.addComment(com2);
video1.printComments(); // va a imprimir 3 comentarios
console.log(`El video2 tiene ${video2.likes()} likes`);
video2.printTime();
video2.addComment(com3);
video2.addComment(com2);
video2.addComment(com1);
video2.printComments(); // va a imprimir 3 comentarios

