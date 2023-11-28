function initializeSignInPopup() {
    const myButton = document.getElementById('signInButton'); // Replace 'yourButtonId' with the actual ID of your button
    const myPopup = document.getElementById('signInPopup'); // Replace 'yourPopupId' with the actual ID of your popup
    const submitPopup = document.getElementById('signInSubmit'); // Replace 'yourClosePopupId' with the actual ID of your close button

    myButton.addEventListener("click", function () {
        myPopup.classList.add("show");
    });

    submitPopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
    });

    window.addEventListener("click", function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove("show");
        }
    });
}