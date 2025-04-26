let trashIcon = document.getElementsByClassName("fa-trash-o");
let editIcon = document.getElementsByClassName("fa-edit");

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



Array.from(editIcon).forEach((element) =>{
  element.addEventListener("click", () =>{
    const name = this.parentNode.parentNode.childNodes[1].innerText;
    const location = this.parentNode.parentNode.childNodes[3].innerText;
    const cellphone = this.parentNode.parentNode.childNodes[5].innerText;
    fetch('editContactItem', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'location': location,
        "cellphone": cellphone
      })
    }).then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
})