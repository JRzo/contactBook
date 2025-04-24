let trashIcon = document.getElementsByClassName("fa-trash-o");


Array.from(trashIcon).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText;
      const location = this.parentNode.parentNode.childNodes[3].innerText;
      const cellphone = this.parentNode.parentNode.childNodes[5].innerText;
      fetch('contactItem', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'location': location,
          "cellphone": cellphone
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
});
