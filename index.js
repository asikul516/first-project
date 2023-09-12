

function sendMail() {
    var parmas = {
        name: document.getElementById("name").value,
        email: document.getElementById("emial").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_e9prujo";
    const templateId = "template_06ij2nq";


  emailjs
  .send(serviceId, templateId, parmas)
  .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("emial").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
     .catch((err) => console.log(err));


}


