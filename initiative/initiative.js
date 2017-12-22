let order = [];

/**
 * sort the order array by number
 * 
 */
function sort() {
    order.sort((a, b) => {
        if (a.number > b.number) { return -1; }
        if (a.number < b.number) { return 1; }
        return 0;
    })
    display()
}

/**
 * add person to initiative
 * 
 * @param {string} name 
 * @param {int} number 
 * @param {string} notes 
 */
function addtoinit(name, number, notes) {
    order.push({ name: name, number: parseInt(number), notes: notes })
    display()
}

/**
 * remove from list
 * 
 * @param {object} data - json of element
 */
function removeThis(data){
    order.splice(data.id,1)
    display()    
}

/**
 * Next Person
 * 
 */
function next() {
    let last = order.shift()
    order.push(last)
    display()
}

/**
 * Update DOM
 * 
 */
function display() {
    document.getElementById('list').innerHTML = ""
    for (let i = 0; i < order.length; i++) {
        let element = document.createElement('li')
        let remove = document.createElement('button')
        remove.setAttribute('type', 'button')
        remove.setAttribute('onclick', 'removeThis(this.parentElement)')
        remove.innerText = `X`
        element.innerHTML = order[i].name
        element.setAttribute('id',i)
        element.appendChild(remove)
        document.getElementById('list').append(element)
    }
    // if object exists at position 0
    if(order[0]){
        document.getElementById('current').innerText = order[0].name
    }else{
        document.getElementById('current').innerText = ""
    }
    // if array longer than 1
    if (order.length > 1) {
        document.getElementById('ondeck').innerText = order[1].name
    }else{
        document.getElementById('ondeck').innerText = ""
    }

}
