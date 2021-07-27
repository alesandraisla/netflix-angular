let conjunto = [[1,2,3], [4,5,6], [7,8,9]]

console.log(`Conjunto  ${conjunto}`)

for(let lista of conjunto) {
    console.log(`Lista ${lista}`)
    for(let i of lista) {
        console.log(`item ${i}`)
    }
}

for(let cada of conjunto) {
    console.log(cada)
}
