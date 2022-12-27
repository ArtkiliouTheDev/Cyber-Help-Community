function algo_chiffrement(string) {

    var someVariable = '';
    var shard = '';
    var shard1 = '';
    var shard2 = '';
    var convertedShard = '';

    for(let i = 0; i < `${string.length}`; i+= 2) {
        shard1 = string.split('')[i]
        shard2 = string.split('')[i + 1]
        shard = shard1 + shard2
        if(shard == '<insérez votre caractère>'){
            convertedShard = '<insérez la correspondance>';
        }
         /*rajoutez autant de if que le nombres de caractères possibles (par exemple si votre regEx c'est A-Za-z0-9 vous aurez 63 IFs)*/
        someVariable =  someVariable + convertedShard
        someVariable = someVariable.replaceAll(' ', '')
}
 
/*dans le for() si l'algo doit reconnaitre un nombre de caractères n, vous aurez ça :

for(let i = 0; i < `${string.length}`; i+= n)

et par conséquent il y aura n variables shard*/
