export default function currencyFilter(value, curency){
    return new Intl.NumberFormat('ru-RU',{
        style: 'currency',
        currency: curency
    }).format(value)

}