let cl = console.log;

// const printpattern = (n) =>{
//     for(let row = 0; row < n; row ++){
//         let patterns = ''
//         for(let col= 0; col < n; col++){
//             if(col <= row){
//                 patterns += " * "
//             }
//         }
//         cl(patterns)
//     }
// }
// printpattern(3)

const printpattern = (n) =>{
    let patterns = ''
    for(let row = 0; row < n; row ++){
        for(let col= 0; col < n; col++){
            if(col <= row){
                patterns += " * "
            }
        }
        patterns += "\n"
    }
    return patterns
}

cl(printpattern(3))

const printpattern1 = (n) =>{
    let patterns = ''
    for(let row = 0; row < n; row ++){
        for(let col= 0; col < n; col++){
            if(col <= row){
                patterns += " * "
            }
        }
        patterns += "\n"
    }
    return patterns
}

cl(printpattern1(5))

const printpattern2 = (n) =>{
    let patterns = ''
    for(let row = 0; row < n; row ++){
        for(let col= 0; col < n; col++){
            if(col <= row){
                patterns += " * "
            }
        }
        patterns += "\n"
    }
    return patterns
}

cl(printpattern2(7))


const printpattern3 = (n) =>{
    let patterns = ''
    for(let row = 0; row < n; row ++){
        for(let col= 0; col < n; col++){
            if(col <= row){
                patterns += " * "
            }
        }
        patterns += "\n"
    }
    return patterns
}

cl(printpattern3(9))