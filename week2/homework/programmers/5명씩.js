const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

function solution(names) {
    var answer = [];
    
    for(i=0; i< names.length; i += 5){
        answer.push(names[i])
    }
    return answer;
}

console.log(solution(names));