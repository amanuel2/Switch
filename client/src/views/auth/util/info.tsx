
const getUserInfo = async () => {
    const rr = await fetch('http://localhost:5002/api/user/info', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    const info = await rr.json()
    
    return new Promise((res,rej) => {
        if(info) res(info)
        else rej('User is not authenticated')
    });
}

export default getUserInfo
