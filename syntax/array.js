console.log('A');
console.log('B');

var i = 0; 
while(i < 2) {
    console.log('C1');
    console.log('C2');
    i = i + 1;
}

console.log('D');

// i는 0 0은 2보다 작으니까 ture 가되면서 C 1 C2 가실행되고 i = i는 1 이니까 1+1; 2 다시위로 가서 2는 2와 같으니까 false가되면서 밑에 d코드가 실행된다.