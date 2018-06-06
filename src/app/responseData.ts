export class ResponseData{

    // userId: number;
    // userName: string;
    qId: string;
    qStamp: string;
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    // selectedAnswer: string;
    // correctAnswer: string;
    // startTime: number;
    // endTime: number;
    // totalTime: number;

    // userId= 100;
    // userName= "Ajay";
    // questionId= 1;
    // questionStamp= "What is Math";
    // op1: "Logical Thinking";
    // op2: "AR";
    // op3: "any";
    // op4: "non of above";
    // selectedAnswer: "op1";
    // correctAnswer: "op1";
    // startTime: 1;
    // endTime: 8;
    // totalTime: 15;
    constructor(questionId, questionStamp,op1,op2,op3,op4){

        // this.userId = userId;
        // this.userName = userName;
        this.qId = questionId;
        this.qStamp = questionStamp;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
    }
}