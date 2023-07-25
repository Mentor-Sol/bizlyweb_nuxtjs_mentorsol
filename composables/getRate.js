export const GetRate = (item) => {
    return item.rate_type.toLowerCase() == 'hourly' && item.flexible_rate ? item.min_rate + ' - ' + item.max_rate + '/hr' : item.max_rate + '/hr';
}