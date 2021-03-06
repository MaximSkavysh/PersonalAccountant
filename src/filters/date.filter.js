export default function dateFilter(value, format = 'date') {
    const options = {}
    if(format.includes('date')){
        options.day = 'numeric',
        options.month = 'long',
        options.year = 'numeric'
    }
    if(format.includes('time')){
        options.hour = 'numeric',
        options.minute = 'numeric',
        options.second = 'numeric'
    }
    
    return new Intl.DateTimeFormat('en-US', options).format(new Date(value))
}