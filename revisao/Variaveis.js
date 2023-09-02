import chalk from 'chalk';
console.log(chalk.blue('Média Aritmética'));
console.log(chalk.green('>=7'))
console.log(chalk.yellow('>=5 && <7'))
console.log(chalk.red('<5'))
const calculaMedia=(n1,n2,n3,n4)=>{
    const media=(n1+n2+n3+n4)/4
    return media
}
const a=7
const b=8
const c=2
const d=2
const valor = calculaMedia(a,b,c,d)
if(valor<5){
    console.log(chalk.red(valor))
}else if(valor>=5 && valor<7){
    console.log(chalk.yellow(valor))
}else{
    console.log(chalk.green(valor))
}
