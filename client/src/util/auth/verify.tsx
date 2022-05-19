const verify = async (): Promise<any> => {
    const rr = await fetch('http://localhost:5002/api/user/verify', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    const info = await rr.json()
    return new Promise((res,rej) => {
        if(info.is_authenticated) res('User is authenticated')
        else rej('User is not authenticated')
    });
}
 
export default verify
