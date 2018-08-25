function searchIndex(text: string, keyword: string): boolean | number {
    if (text.includes(keyword)) {
        return text.indexOf(keyword)
    } else {
        return false
    }
}

const result = searchIndex('abc', 'b')
if (typeof(result) === 'boolean') {
    console.log('searching failed: ' + result)
} else {
    console.log('search index: ' + result)
}