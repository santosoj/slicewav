# slicewav

Quick audio file slicer.

Install from [npm Registry](https://www.npmjs.com/package/slicewav):
```shell
npm i -g slicewav
```

Install from local:
```shell
npm i -g .
```
...installs `slicewav` into Node `bin`.

Then, e.g.
```shell
slicewav audio.wav 6
```
slices `audio.wav` into six parts of equal length. The output files are invariably named
`slice000.wav`, `slice001.wav` etc.

Requires `ffmpeg` and `ffprobe` commands to be available.
