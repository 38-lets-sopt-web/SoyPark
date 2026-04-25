function solution(num_list) {
    var answer = 0;
    
    const evens = Number(num_list.filter(x => x % 2 === 0).join('')); 
    const odds = Number(num_list.filter(x => x % 2 !== 0).join('')); 
    
    answer = odds + evens;
    
    return answer;
}