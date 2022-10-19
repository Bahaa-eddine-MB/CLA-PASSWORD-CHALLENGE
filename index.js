const fs = require("fs")


function storePassword(path, key, pwd) {
    if (fs.existsSync(path)) {

        const write = `${key}:${pwd}\n`
        fs.appendFileSync(path, write, (err) => {
            if (err) throw err
        });
        console.log("password stored successfuly !!");
    }
    else {
        const write = `${key}:${pwd}\n`
        fs.writeFileSync(path, write, (err) => {
            if (err) throw err
        })
        console.log("password stored successfuly !!");
    }
}


function retrievePassword(path, key) {

    if (!fs.existsSync(path)) {
        throw new Error("File does not exist, cannot retrieve password")
    }

    else {
        const lines = fs.readFileSync(path).toString().split("\n")

        for (const line of lines) {
            const [_key, pwd] = line.split(":")
            if (_key === key && pwd !== undefined && pwd.length !== 0) {
                console.log(`the corresponding password for key ${key} is`, pwd)
                return pwd
            }
        }
        return undefined
    }
}

