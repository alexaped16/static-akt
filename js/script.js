function sendEmail() {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const phone = document.getElementById('txtPhone').value;
    const company = document.getElementById('txtCompany').value;
    const product = document.getElementById('txtProduct').value;
    const message = document.getElementById('txtMessage').value;
  
    const emailBody = `
      <h2>Contact Form submitted from AKT</h2>
      <div>Name: <strong>${name}</strong></div>
      <div>Email: <strong>${email}</strong></div>
      <div>Phone: <strong>${phone}</strong></div>
      <div>Company: <strong>${company}</strong></div>
      <div>Product: <strong>${product}</strong></div>
      <div>Message: <strong>${message}</strong></div>
    `;
  
    const payload = {
      Body: emailBody,
      ToEmails: 'sales@aktinc.com',
      Subject: 'AKT Contact Form',
      FromName: 'AKT',
      FromEmail: 'alexa.pedersen@alexapedersen.com'
    };
  
    fetch('https://gn02-email-test.azurewebsites.net/api/SendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          // Display success message here
          document.getElementById('formMessage').textContent = 'Your form has been successfully sent!';
          document.getElementById('formMessage').classList.add('success');
          console.log('Email sent successfully!');
        } else {
          console.error(response);
          throw new Error('Failed to send email.');
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  
  
  /* toggle hamburger */

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleNavMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        /* add hamburger icon */
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        /* add X icon */
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* event listen */
toggle.addEventListener("click", toggleNavMenu, false);

/* drop down menu */

const items = document.querySelectorAll(".item");

function toggleItem() {
    if (this.classList.contains("drop-down-menu-active")) {
        this.classList.remove("drop-down-menu-active");
    } else {
        this.classList.add("drop-down-menu-active");
    }
}

/* drop down event listen */
for (let item of items) {
    if (item.querySelector(".drop-down-menu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* drop down event listen */
for (let item of items) {
    if (item.querySelector(".drop-down-menu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* close drop down from clicking anywhere */
function closeDropDown (event) {
    let isClickInside = menu.contains(event.target);

    if (!isClickInside && menu.querySelector(".drop-down-menu-active")) {
        menu.querySelector(".drop-down-menu-active").classList.remove("drop-down-menu-active");
    }
}

/* Listener */
document.addEventListener("click", closeDropDown, false);