let Eluser = document.querySelector(".user");
let Elpasword = document.querySelector(".pasword");
let Ellog = document.querySelector(".log");

Ellog.addEventListener("click", async (e) => {
  e.preventDefault();

  let username = Eluser.value.trim();
  let password = Elpasword.value.trim();

  if (!username || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  try {
    let response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      let errorData = await response.json();
      console.error("Xato ma'lumotlari:", errorData);
      throw new Error(`Xato: ${response.status} - ${response.statusText}`);
    }

    let token = await response.json();
    console.log("Token:", token);
    localStorage.setItem("token", token.token || "Token mavjud emas");
    window.location.replace("./pages/user.html");
  } catch (e) {
    console.error("Xato yuz berdi:", e.message);
  }
});

window.location.href = "/";
