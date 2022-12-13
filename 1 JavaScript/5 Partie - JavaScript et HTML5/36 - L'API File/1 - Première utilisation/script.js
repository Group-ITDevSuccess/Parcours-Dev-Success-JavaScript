document.querySelector("#file").addEventListener('change', function () {
    // Du code
    alert(this.files[0].name);
});