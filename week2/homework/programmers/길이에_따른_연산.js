const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
// const num_list = [2, 3, 4, 5];

function solution(num_list) {
    var answer = 0;
    
    if (num_list.length > 10){
        for(i=0; i<num_list.length; i++) answer += num_list[i];
    }
    else if (num_list.length < 11){
        answer = 1;
        for(i=0; i<num_list.length; i++) answer *= num_list[i];
    }
    
    return answer;
}

console.log(solution(num_list));