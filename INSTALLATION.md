## Installation

It's recommended to install [Graphics Magick](http://www.graphicsmagick.org/). If it's not installed, the library will automagically try to install [`lwip`](https://www.npmjs.com/package/lwip) by compiling the C/C++ stuff.

```sh
# Ubuntu
$ sudo apt-get install graphicsmagick

# Fedora
$ sudo dnf install GraphicsMagick

# CentOS / RHEL
$ sudo yum install --enablerepo epel GraphicsMagick

# OS X
$ brew install graphicsmagick

# Windows users can install the binaries from http://www.graphicsmagick.org/
...or using the command line:
# Chocolatey (package manager for Windows)
# (Restart of cmd/PowerShell is required)
$ choco install graphicsmagick
```

Then, you can install this package:

```sh
$ npm i --save image-to-ascii
```
