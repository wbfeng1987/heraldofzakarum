var http = require('http')
var spawn = require('child_process').spawn
var createHandler = require('github-webhook-handler')
var handler = createHandler({
    path: '/',
    secret: 'b79e853b10a5fcf53606c1cb060fee85'    //这里是随机字符串，与 Github 上的配置保持一致
})

function runCommand(cmd, args, callback) {
    var child = spawn(cmd, args)
    var response = ''
    child.stdout.on('data', function(buffer) {
        response += buffer.toString()
    })
    child.stdout.on('end', function() {
        callback(response)
    })
}

http.createServer(function(req, res) {
    handler(req, res, function(err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(9527)

handler.on('error', function(err) {
    console.error('Error:', err.message)
})

handler.on('push', function(event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)

    runCommand('sh', ['./updatePages.sh'], function(txt) {
        console.log(txt)
    });

})