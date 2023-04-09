
//Password must contain an upercase letter and a lowercase letter and a special character

class password {
    constructor() {
        this.upcl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lwcl = 'abcdefghijklmnopqrstuvwxyz';
        this.symbl = '#!@#$%^&*()+-/~'
        this.num = '1234567890'


    }

    funnypassword() {
        let arr = ["password", "incorrect", "12345678", "iforgot", "secret", "MyPreciousssPasssword", "MyName", "Chitu_Hacker", "nothing", "user", "maiNahiBatunga", "Sorry", "1$perhour", "admin", "passwordIs1234"]
        let pass = arr[Math.floor(Math.random() * arr.length)]
        console.log(pass)
        data.innerHTML = pass
    }
    weakpassword() {
        let arr = [this.upcl, this.lwcl]
        let pass = ""
        for (let i = 0; i < 8; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)

            pass = pass + arr[Ran1][Ran2]
        }
        console.log(pass)
        data.innerHTML = pass




    }
    strongpassword() {
        let arr = [this.upcl, this.lwcl, this.symbl]
        let pass = ""
        for (let i = 0; i < 15; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)

            pass = pass + arr[Ran1][Ran2]
        }
        console.log(pass)
        data.innerHTML = pass




    }
    superstrongpassword() {
        let arr = [this.upcl, this.lwcl, this.symbl, this.num]
        let pass = ""
        for (let i = 0; i < 20; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)

            pass = pass + arr[Ran1][Ran2]
        }
        console.log(pass)
        data.innerHTML = pass




    }

}


// Add click event listener to a button or any other DOM element
document.getElementById('copy').addEventListener('click', function() {
    var textToCopy = data.innerHTML; // Text to copy
    copyToClipboard(textToCopy); // Call the function to copy the text to clipboard
  });
  
  // Function to copy text to clipboard using Clipboard API
  async function copyToClipboard(text) {
    try {
      // Check if document is focused
      if (document.hasFocus()) {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard: " + text);
  
        // Add transition effect to provide visual hint
        var copyButton = document.getElementById('copy');
        copyButton.innerText = 'Copied!';
        copyButton.classList.add('copied');
  
        // Reset button text and class after 2 seconds
        setTimeout(function() {
          copyButton.innerText = 'Copy';
          copyButton.classList.remove('copied');
        }, 2000);
      } else {
        console.error("Document is not focused. Clipboard API requires user interaction.");
      }
    } catch (err) {
      console.error("Unable to copy text to clipboard", err);
    }
  }















let a = new password()




funny.addEventListener('click', (e) => {
    e.preventDefault()
    a.funnypassword()
   
})
weak.addEventListener('click', (e) => {
    e.preventDefault()
    a.weakpassword()
   
})
strong.addEventListener('click', (e) => {
    e.preventDefault()
    a.strongpassword()
   
})
superstrong.addEventListener('click', (e) => {
    e.preventDefault()
    a.superstrongpassword()
   
})

