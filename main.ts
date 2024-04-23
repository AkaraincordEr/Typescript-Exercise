let personName :string = '';

personName = prompt('What is your name') || '';

let lowercase :string = personName.toLowerCase() ;

let uppercae :string = personName.toUpperCase() ;

let titlcase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== '' ){
    alert(`Hello ${personName}, Here are your name in;
    lowercase; ${lowercase}
    uppercase; ${uppercae}
    tittlecase; ${titlcase}`)
}
else{
    alert('Plese fill your name !')
}


