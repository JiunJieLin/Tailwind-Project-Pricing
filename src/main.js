import "./index.css";
const login = document.getElementById("login");
const close = document.getElementById("btn-close");
const modal = document.getElementById("modal");
login.addEventListener("click", function () {
  modal.classList.remove("pointer-events-none", "opacity-0");
});
close.addEventListener("click", function () {
  modal.classList.add("pointer-events-none", "opacity-0");
});
const renderList = function (id) {
  const targetUl = document.getElementById(id);
  let svgColor = "text-primary";
  if (id === "list2") {
    svgColor = "text-white";
  }
  const templateLi = `<li class="mt-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-4 h-6 w-6 stroke-current ${svgColor}"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              item bla bla bla
            </li>`;
  let htmlStr = "";
  for (let i = 0; i < 5; i++) {
    htmlStr = htmlStr + templateLi;
  }
  targetUl.innerHTML = htmlStr;
};
renderList("list1");
renderList("list2");
renderList("list3");
