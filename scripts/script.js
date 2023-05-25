"use strict";

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const hiddenInfo = document.getElementById("hidden-info");
const emailValidate = document.getElementById("email-validate");
const containerWrappers = document.querySelectorAll(".container-wrapper");
// const viewMore = document.querySelectorAll("view-more");
// const viewLess = document.querySelectorAll("view-less");
// const contentRow = document.querySelectorAll("content-row");

let email;
document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault();
  email = document.getElementById("enter-email");
  if (!email.value || !regex.test(email.value)) {
    e.preventDefault();
    e.stopPropagation();
    email.classList.add("is-invalid");
  } else {
    hiddenInfo.classList.remove("d-none");
    hiddenInfo.classList.add("d-block");
    emailValidate.classList.add("d-none");
  }
});

const showView = function (contentRow, viewMore, viewLess) {
  if (contentRow.classList.contains("d-none")) {
    viewMore.classList.remove("d-none");
  } else {
    viewLess.classList.remove("d-none");
  }
};

const hideView = function (viewMore, viewLess) {
  viewMore.classList.add("d-none");
  viewLess.classList.add("d-none");
};

containerWrappers.forEach((wrapper) => {
  const viewMore = wrapper.querySelector(".view-more");
  const viewLess = wrapper.querySelector(".view-less");
  const contentRow = wrapper.querySelector(".content-row");

  wrapper.addEventListener("mouseover", () =>
    showView(contentRow, viewMore, viewLess)
  );
  wrapper.addEventListener("mouseout", () => hideView(viewMore, viewLess));

  viewMore.addEventListener("click", () => {
    contentRow.classList.remove("d-none");
    viewMore.classList.add("d-none");
    viewLess.classList.remove("d-none");
  });
  viewLess.addEventListener("click", () => {
    contentRow.classList.add("d-none");
    viewLess.classList.add("d-none");
    viewMore.classList.remove("d-none");
  });
});
