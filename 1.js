const map = new Map([
    [12, 'some text'],
    [true, 0],
    [13, 'Lenovo']


]);

map.delete(12)
 // console.log(map);

 // console.log(map.size);

const categories =  new Set([
    'Laptops',
    'Headphones',
    'Microphones',
    'Monitors'

]);

categories.add('Mice');
console.log(categories);
