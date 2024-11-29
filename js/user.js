let Elwrapper = document.querySelector(".wrapper");
let Elinput = document.querySelector("input");
///////////////////////////////
(async function () {
  ///////////////////////////////
  let response = await fetch("https://fakestoreapi.com/users");
  let data = await response.json();
  ///////////////////////////////
  function filterUsers() {
    let searchTerm = Elinput.value.toLowerCase();
    Elwrapper.innerHTML = "";
    ///////////////////////////////
    data
      .filter((user) =>
        `${user.name.firstname} ${user.name.lastname}`
          .toLowerCase()
          .includes(searchTerm)
      )
      .forEach((user) => {
        ///////////////////////////////
        let newdiv = document.createElement("div");
        let newp = document.createElement("p");
        let newh1 = document.createElement("h1");
        let newi = document.createElement("i");

        ///////////////////////////////
        newdiv.classList.add("user-card");
        newi.classList.add("user-phone");

        ///////////////////////////////
        newh1.textContent = `${user.name.firstname} ${user.name.lastname}`;
        newp.textContent = `Email: ${user.email}`;
        newi.textContent = `Phone: ${user.phone}`;

        ///////////////////////////////
        newdiv.appendChild(newh1);
        newdiv.appendChild(newp);
        newdiv.appendChild(newi);
        Elwrapper.appendChild(newdiv);
      });
  }
  ///////////////////////////////
  Elinput.addEventListener("input", filterUsers);
  ///////////////////////////////
  filterUsers();
})();
