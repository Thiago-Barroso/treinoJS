var primo = function(a){
    let divisores = 0
    for(var i =1; i<a/2 ; i++){
        if(a%i == 0){
            divisores++
        }
        
    }
    console.log(divisores)
    if(divisores <= 1){
        return 'É primo'
    } else {
        return 'Não é primo'
    }
}
module.exports = primo