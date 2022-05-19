const register_submit = async (full: string, user: string, emal: string, pass: string, conf: string): Promise<any>  => {

    await fetch('http://localhost:5002/api/auth/register', {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'fullname': full,
            'username': user,
            'email':    emal,
            'password': pass,
            'confirm':  conf
        })
    }).then(res => {
        res.json().then(i => {
            if(i.status === 200) {
                window.location.reload();
            } else {
                console.log(i);
            }
        }).catch(e=> {
            alert(e)
            window.location.reload();
        })
    }).catch(err => {
        alert(err)
        window.location.reload();
    });
}

const login_submit = async (emal: string, pass: string) => {

    // Send a post request to server
    await fetch('http://localhost:5002/api/auth/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'email':    emal,
            'password': pass,
        })
    })
        .then(res => {
            res.json().then(i => {
                if(i.status === 200) {
                    window.location.reload();
                } else {
                    alert(i.message)
                }
            }).catch(e=> {
                alert(e)
                window.location.reload();
            })
        }).catch(err => {
            alert(err)
            window.location.reload();
        });
}

const logout_submit = async () => {
    // Send a post request to server
    await fetch('http://localhost:5002/api/auth/logout', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        }).then(res => {
            res.json().then(i => {
                if(i.status === 200) {
                    window.location.reload();
                } else {
                    alert(i.message)
                    window.location.reload()
                }
            }).catch(e=> {
                alert(e)
                window.location.reload();
            })
        }).catch(err => {
            alert(err)
            window.location.reload();
        });
}

export { register_submit, login_submit, logout_submit }
