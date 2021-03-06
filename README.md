## Universal offline QR generator for creating encrypted paper backups.

### ABOUT THIS TOOL

[https://qr.greenhex.net](https://qr.greenhex.net)

The idea for creating this tool came for the idea for safely storing private keys of the crypto-currencies that don't have generators.

If so called Brain Wallet can be generated elsewhere there is no need to use this tool, but it may be a good idea to store the seed of Electrum wallet. In theory we should remember the seed ourselves and it's already a brain wallet, but some people may already remember long passpharse and this can be reused to backup anything else, using this tool.

#### Browser Compatibility

Developed under **Firefox**, tested in **Chrome**, quick tested in **Opera**. Other browsers not supported. Most safe users would run from Linux with built in Firefox. 

Sorry Mac/Safari users, haven't tested, but likely the `HTML to SVG to Image` part won't work, this means saving "QR area with details" likely won't work, alongside with other "saving" functionality. You should be able to print still. 

### HOW IT WORKS

Entered plain text is being encrypted using JavaScript implementation of OpenSSL library.
Encryption algorithm used is AES-256-CBC. The text encrypted into binary form is converted into Base64 string and is a source for the QR image. Once printed on the paper it can be easy read back by a camera, but remains encrypted.

Decryption is the exact reversal of that process.   

**Corresponding Command Line**


[https://askubuntu.com/questions/60712/how-do-i-quickly-encrypt-a-file-with-aes](https://askubuntu.com/questions/60712/how-do-i-quickly-encrypt-a-file-with-aes "https://askubuntu.com/questions/60712/how-do-i-quickly-encrypt-a-file-with-aes")

Encrypt:

		openssl aes-256-cbc -in plain.txt -out encrypted.txt -a


Decrypt to file:
	
		openssl aes-256-cbc -d -a -in encrypted.txt -out plain.txt

Decrypt to console:
	
		openssl aes-256-cbc -d -a -in encrypted.txt

### TECHNICAL APPROACH

The most important thing for security tools is making sure they are as secure as technology allows, so I have had a few considerations.

- no AJAX no XMLHttpRequest Object, this means no JQuery library, all used libraries checked for the reference XMLHttpRequest
- minimize use of libraries, so most of the code self written, except where makes no sense, qr generator, openSSL, and the like.
- minimalistic UI, so no bootstrap, yet avoid building from scratch, thanks to [http://getskeleton.com/](http://getskeleton.com/ "http://getskeleton.com/")

Originally it supposed to be a single file application, but as css, and js kept growing, I decided to "modularize" sort of say. The tricky part was multilingual approach, I use DOM manipulation to force the browser to use is it's built in mechanism to load translation js file.

The biggest challenge of multilingual was Info/About/FAQ page, I didn't want to put HTML into js file with translations. Also using variable per sentence would be an overkill, so I wanted to use HTML fragments but avoid XMLHttpRequest Object again, so used iframe to let the browser reload HTML per language.

At the a single file tool could be created by bundling it together, including images, but I don't think it's necessary. It may be in fact easier to trust a set of files easy to review rather than one big combo.    

**Translations**

Please fork to add a translation. All is located in `langs` folder and should be obvious. Translation authors will be added to this page.

- English: Pawel Cioch
- Polish: Pawel Cioch
- German: ...
- Spanish: ...
- ...



### LICENSE

Copyright (c) 2018, Pawel Cioch

Any libraries included in this project Copyright (c) to their respective authors. Names and licenses if available attached in the source code repository. 


Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of
   conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list
   of conditions and the following disclaimer in the documentation and/or other
   materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be
   used to endorse or promote products derived from this software without specific
   prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.