// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(r => r.json())
    .then(userObject => {
        const userId= userObject.id
        document.body.append(userId)
    })
    .catch(error => {
        const errorMessage= error.message
        document.body.append(errorMessage)
    })
}