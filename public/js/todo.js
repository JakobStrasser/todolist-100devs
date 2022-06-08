
const deletes = document.querySelectorAll('.del')
const completed = document.querySelectorAll('span.completed')
const waiting = document.querySelectorAll('span.waiting')
const left = waiting.length
const leftSpan = document.getElementById('total')
leftSpan.innerText = left


Array.from(deletes).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(waiting).forEach((el)=>{
    el.addEventListener('click', toggleComplete)
})

Array.from(completed).forEach((el)=>{
    el.addEventListener('click', toggleComplete)
})
async function deleteTodo () {
    const todoId = this.parentNode.dataset.id
    console.log('Deleteing '+ todoId)
    try{
        const response = await fetch(`${todoId}`, {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': todoId
            })
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function toggleComplete () {
    const todoId = this.parentNode.dataset.id
    console.log('Toggling '+ todoId)
    try{
        const response = await fetch(`${todoId}`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': todoId
            })
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
