var client = new WebTorrent()

// When user drops files on the browser, create a new torrent and start seeding it!
window.DragDrop('body', function (files) {
    client.seed(files, function (torrent) {
        console.log('Client is seeding:', torrent.infoHash)
        var f = torrent.files[0];
        f.renderTo('#video');
    })
})