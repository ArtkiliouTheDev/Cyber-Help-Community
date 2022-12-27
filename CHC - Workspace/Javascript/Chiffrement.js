function algo_chiffrement(string) {

    var someVariable = '';
    var shard = '';
    var convertedShard = '';

    for(let i = 0; i < `${string.length}`; i++) {
        shard = string.split('')[i]
        if(shard == '<insérez votre caractère>'){
            convertedShard = '<insérez la correspondance>';
        }
         /*rajoutez autant de if que le nombres de caractères possibles (par exemple         si votre regEx c'est A-Za-z0-9 vous aurez 63 IFs*/
        someVariable =  someVariable + convertedShard
        someVariable = someVariable.replaceAll(' ', '')
}
