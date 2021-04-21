// // List of toys and counts of how many there are
// Individual object
// begin books 1-3
const basketball = {
    price: '$' + 19.99,
    id: 42069,
    name: "Wilson",
    weight: '1 LBS'
}
// Individual object
const longboard = {
    price: '$' + 99.99,
    id: 69420,
    name: "Sector 8",
    weight: '10 LBS'

}
// Individual object
const skateboard = {
    price: '$' + 49.99,
    id:46290,
    name:"Element Skateboard",
    weight:'5 LBS'
}

console.log(basketball);
console.log(longboard);
console.log(skateboard);

// This takes in the 4 parameters needed to create a new toy and makes a new object of it.
class toy {
    constructor(price, id, name, weight){
        this.price = price,
        this.id = id,
        this.name = name,
        this.weight = weight
    }
}
// new_toy object = use class constructor with 4 params
let new_toy = new toy(420, 69, 'Dumbell', '2 LBS')

console.log(new_toy)

let toy_2 = new toy(69999999, true, 'Bar', '5 LBS')

console.log(toy_2)

// begin book 4
// array that contains 3 objects
const graphics_cards = [
    {
        series: 3090,
        manufacturer: "Nvidia",
        architecture: "Ampere",
        price: 1500,
        cuda_cores: 10496,
        memory: '24 GB',
        memory_type: "GDDR6X",
        transistors: 28300000000,
        in_stock: false
    },
    {
        series: 3080,
        manufacturer: "Nvidia",
        architecture: "Ampere",
        price: 700,
        cuda_cores: 8704,
        memory: '10 GB',
        memory_type: "GDDR6",
        transistors: 28300000000,
        in_stock: false
    },
    {
        series: 3070,
        manufacturer: "Nvidia",
        architecture: "Ampere",
        price: 500,
        cuda_cores: 5888,
        memory:'8 GB',
        memory_type: "GDDR6",
        transistors: 17400000000,
        in_stock: false
    }
]


console.log(graphics_cards)




// begin book 5
// iterate through the array and log out the series and price of the GPU with correct sentences concatenated
// since the variables are not assigned we assign them to gpu_info and log them out as they change.
for (const gpu_info of graphics_cards) {
    console.log('The price of the RTX ' + [gpu_info.series] + ' is $' + [gpu_info.price] + ' USD')
}

// begin book 6
// new object needing to be added to array graphics_cards
const rtx_3060_ti = {
    series: '3060 ti',
    manufacturer: "Nvidia",
    architecture: "Ampere",
    price: 400,
    cuda_cores: 4864,
    memory:'8 GB',
    memory_type: "GDDR6",
    transistors: 17400000000,
    in_stock: false
}
// new object needing to be added to array graphics_cards
const rtx_3060 = {
    series: 3060,
    manufacturer: "Nvidia",
    architecture: "Ampere",
    price: 320,
    cuda_cores: 3584,
    memory:'12 GB',
    memory_type: "GDDR6",
    transistors: 13250000000,
    in_stock: false
}

// append rtx_3060_ti & 3060 to array graphics_cards
graphics_cards.push(rtx_3060_ti)
graphics_cards.push(rtx_3060)

console.log(graphics_cards)

// verify that for loop still works: working as expected
for (const gpu_info of graphics_cards) {
    console.log('The price of the RTX ' + gpu_info.series + ' is $' + gpu_info.price + ' USD')
}

// begin chapter 7 

// for loop that iterates through the graphics_cards array and logs out a string using concatenation
// use the backtick and $ from now on to concatenate
for (const gpu_info of graphics_cards){
    console.log(`The number of cuda cores on the RTX ${gpu_info.series} is ${gpu_info.cuda_cores}`)
}

// begin chapter 8
// iterate through the list and multiply MSRP by 1.05 on every price in that list
for (const gpu_info of graphics_cards){
    gpu_info.price = gpu_info.price * 1.05

    console.log(`The number of cuda cores on the RTX ${gpu_info.series} is ${gpu_info.cuda_cores} and the price is ${gpu_info.price} USD`)
}

// begin chapter 9

const gpuToFind = 3080
for (const gpu_info of graphics_cards) {
    if (gpu_info.series === gpuToFind) {
        gpu_info.price = gpu_info.price * 1.05

        console.log(`The number of cuda cores on the RTX ${gpu_info.series} is ${gpu_info.cuda_cores} and the price is ${gpu_info.price} USD`)
    }
}

// begin chapter 10

const pascal_gpu_list = []

const gtx_1080_ti_gpu = {
    series: "1080 Ti",
    manufacturer: "Nvidia",
    architecture: "Pascal",
    price: 700,
    cuda_cores: 3584,
    memory:'11 GB',
    memory_type: "GDDR5X",
    transistors: 11800000000,
    in_stock: false
}

pascal_gpu_list.push(gtx_1080_ti_gpu)

console.log(pascal_gpu_list)