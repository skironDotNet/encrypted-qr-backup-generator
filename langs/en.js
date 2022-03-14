var translations = {
    xtPharse: 'Passphrase',
    xtPharseConfirm: 'Confirm Passphrase',
    xtPlainTextLabel: 'Secret to Encrypt',
    xtPlainTextLabel2: 'Text for QR',
    xtEncQrData: 'Data in the QR',
    xtQrLabel: 'QR Label',
    xtQrDescription: 'QR Description',
    xtOptional: '(Optional)',
    xtGenerate: 'Generate',
    xtClearForm: 'Clear Form',
    xtEmbedLabel: 'Embed Label in the QR',
    xtEncryption: 'Encryption',
    xtDecryption: 'Decryption',
    xtNoEncryption: 'No Encryption',
    xtClose: 'Close',
    xtSaveQrImage: 'Save QR Image',
    xtSaveQrHtml: 'Save as HTML',
    xtPrint: 'Print',
    xtAdjustQrSize: 'QR Size',
    xtErrPharseTooShort: 'The Passphrase too short!',
    xtErrPharseNotMatch: 'The Passphrase does not match the Confirm Passphrase!',
    xtCopyOthers: 'JavaScript copyrights are included in the source.',
    xtNoWarranty: 'No warranty.',
    xtDownloadSource: 'Download from GitHub',
    xtQrAreaWithDetails: 'QR area with details',
    xtQrImageOnly: 'QR image only',
    xtSaveConfirm: 'Save',
    xtFileName: 'File name',
    xtNotOffline: "It appears this tool is running of a live website, which is not recommended for creating valuable QRs. Instead, use the download link at the bottom of this page to download the ZIP file from GitHub and run this tool offline as a 'local' HTML file.",
    xtHeadTitle: "Universal offline QR generator for creating encrypted paper backups.",
    xtInfo: "Info",
    xtDecrypt: 'Decrypt',
    xtEnterEncryptedKey: 'Encrypted Data From QR',
    xtLoadQrImage: 'Load QR from Image',
    xtErrWrongPassphrase: "Can't decrypt - wrong passpharse.",
    xtErrGenericDecryptError: "Can't decrypt - likely entered text is not valid AES256 base64 encoded encrypted text",
    xtDecQrData: 'Decrypted Secret',
    xtDonate: 'Donate',
    xtDonationHeader: 'If you think this tool is useful, consider donating to the author. Each donation will help to maintain this tool and create new ones. Thanks!',
    xtHideDate: 'Hide the Date',
    xtQrDateCreatedLabel: 'Created: ',
    xtTwoFactorUtility: '2FA QR',
    xt2faAccountName: 'Account Name',
    xt2faSecretKey: 'Secret Key',
    xtErr2FaAccountNameTooShort: 'Account Name too short!',
    xtErr2FaSecretKeyNotPresent: 'Enter the Secret Key!',
    xt2faPleaseScan: 'Scan the following code in a two-factor authentication application',
    xt2faInfo: 'If you have a backup copy of a two-factor authentication key, instead of entering the code into the 2FA application, you can paste it here and generate the code to be quickly scanned in any 2FA application, for example in "Google Authenticator".',
    xtShowPassword: 'Show',
    xtErrEncryptedDataEmpty: 'Please enter Encrypted Data',
    xtErrPassphraseEmpty: 'Please enter Passphrase',
    xtErrSecretEmpty: 'Enter the secret to be encrypted',

    xhtPlainTextHint: 'Private key(s) or seed(s) or anything to encrypt. Exceeding 1024 characters may result in QR being hard to read by certain software.',
    xhtPharseHint: 'This must be a minimum 5 words (or 25 characters) to call it strong.',
    xhtEncryptedTextHint: 'Paste encrypted text from your QR, or click the QR icon to scan, or load from file.',

    xttScanQrHint: 'Scan QR code using camera',
    xtSelectCamera: 'Select a camera to scan a QR',
    xtLoadQrFromImage: 'Load encrypted data from QR image',
    xtBadQrImage: 'Error scanning file, likely does not contain QR image or it is unreadable.',
    xtNoCamerasDetected: 'No system or connected camera could be detected.',
    xtNoCameraPermission: 'Camera blocked by browser. You must authorize the use of the camera. Please try again or check your browser\'s permission settings to see if they have been permanently blocked.',
    xtCameraBusyOrDisconnected: 'Selected camera is busy (used by other software, other browser, or browser tab);<br>or got disconnected after camera list created.<br><br>Original error message:',
    xtLoadingCameraList: 'Loading camera list...',
    xtInitializingCamera: 'Initializing camera...',

    xtCameraChromeError: 
        "Chrome based browsers do not allow camera access from file:/// location.<br>"
        + "Must serve this file via some simple localhost server. You can use \"Web Server for Chrome\" plugin<br>"
        + "https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/<br><br>"
        + "<img src=\"images/webserver.png\"/><br><br>"
        + "Many other choices at<br>"
        + "https://medium.com/swlh/need-a-local-static-server-here-are-several-options-bbbe77e59a11<br><br>"
        + "You can then access this tool locally like http://127.0.0.1:8887<br><br>"
        + "Or just use Firefox browser.",
}