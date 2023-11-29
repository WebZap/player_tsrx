interface IArray {
    name: string,
    id: string
}
type TArray = IArray[]

export const array: TArray = [{name: 'roma', id: '1'}, {name: 'pasha', id: '2'}]

const newArray:TArray = array.filter((item: IArray ) => item.name === 'roma')
console.log(newArray)



export function findNeedle(haystack: any[]):string {
    let boxForNeedle: number = 0;
    for (let i = 0; i < haystack.length; i++) {
        if(typeof haystack[i] === 'string' && haystack[i] === 'needle'){
            boxForNeedle = i
            break
        }
    }
    return `found the needle at position ${boxForNeedle}`
}