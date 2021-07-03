const demo = () => console.log('do something')

console.log('do anything')
setTimeout(demo)
console.log('do anything')
setTimeout(() => console.log('after 1 sec'), 1000) // add time in mili-second

// akoy kaj repeatly ghotaite hole "setInterval" babohar kora hoy

setInterval(() => console.log('repete stop by ctl+c'), 3000) // repeated after 3 sec
