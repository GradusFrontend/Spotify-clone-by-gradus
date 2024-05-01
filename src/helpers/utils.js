export function toMinutes(num) {
    let duration = num / 60000

    return ((duration.toFixed(2)).split('.').join(':'));
}

export function artistsString(arr) {
    let str = ''

    if (arr.length > 1) {
        arr.forEach(element => {
            str += `${element.name}, `
        });

    } else {
        str = arr[0].name
    }
    
    str = str.slice(0, -1)
    return str
}