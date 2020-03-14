import * as c from './color.mjs';



export function startLog() {
    let log = "┏━━━━━━━━━━━━━━━━━━━━┓\n"
    log +=    "┃ HTTP server ONLINE ┃\n"
    log +=    "┗━━━━━━━━━━━━━━━━━━━━┛"
    console.log(log);
    console.log("%s this project was created by Vettori Massimo and Frison Eric", c.w)
    console.log("%s this server is only for testing purpose %s", c.w, c.cg("(do not enter any personal data)"))
    console.log("%s verbose logs enabled \n\n", c.w)
    
    
}

export function logIn(topic) {
    console.log("%s %s %s", c.i, c.cg("got message from topic"), `[${topic}]`);
}

export function logOut(topic) {
    console.log("%s %s %s", c.o, c.cg("sent message to topic "), `[${topic}]`)
}

export function logErr() {
    console.log("%s %s %s", c.cr(" ◑ http"), c.cg("Failed to log-in"), "incorrect token");
}

export function logReq(url) {
    console.log("%s %s %s", c.q, c.cg("got request  "), ("/"+url))
}

export function logRes(url) {
    console.log("%s %s %s", c.a, c.cg("sent response"), ("/" + url))
}

export function logPost() {
    console.log("%s Warning, unsafe %s transfer...", c.u, c.cr("<img>"))
}
