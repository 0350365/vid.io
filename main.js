const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const ffprobe = require('ffprobe');
const ffmpeg = require('fluent-ffmpeg');

app.use(express.static(__dirname));

app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get('/videos', (req, res) => {
  const vidPath = `streamables/${req.query.id}`;
  const range = req.headers.range;
  console.log(range);
  const vidSize = fs.statSync(vidPath).size;

  ffmpeg(vidPath)
    .format('matroska')
    .videoCodec('copy')
    .audioCodec('aac')
    .on('error', (err, stdout, stderr) => {
      console.log(err + ' ' + stdout + ' ' + stderr);
    })
    .pipe(res, { end: true });
});

/*
app.get('/videos', (req, res) => {
  try {
    // Path and size of video
    const range = req.headers.range;
    const vidPath = `streamables/${req.query.id}`;
    const vidSize = fs.statSync(vidPath).size;

    // Video ranges
    const megabyte = 10 ** 6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + megabyte, vidSize - 1);

    const totalLength = end - start + 1;
    const headers = {
      'Content-Range': `bytes ${start}-${end}/${vidSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': totalLength,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);
    var Stream = fs.createReadStream(vidPath, { start, end });

    Stream.pipe(res);
  } catch (err) {
    console.log(`yo u messed up here: ${err}`);
  }
});
*/
app.get('/names', (req, res) => {
  var fnames = [];
  fs.readdir('./streamables', (err, files) => {
    files.forEach((file) => {
      var strNm = JSON.stringify(file);
      fnames.push(strNm);
    });
    res.json({
      names: fnames,
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});
