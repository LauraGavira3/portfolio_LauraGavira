const menuIcon = document.querySelector('.menu-button');
const nav = document.querySelector('.main-header nav');

if (menuIcon && nav) {
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

const links = document.querySelectorAll('.main-header nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('active');
  });
});

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // impede reload da página

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      showToast("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      showToast("Ocorreu um erro. Tente novamente.", true);
    }
  });
}

// Função do toast
function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  if (isError) toast.classList.add("error");

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
