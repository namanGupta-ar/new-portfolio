import React, { useEffect, useState } from "react";
import TestimonialModal from "./TestimonialModal";

const testimonials = [
  {
    title: "Daniel lewis",
    desc: "lorem20",
    avatar: "/images/avatar-1.png",
  },
  {
    title: "Daniel lewis",
    desc: "lorem20",
    avatar: "/images/avatar-1.png",
  },
  {
    title: "Daniel lewis",
    desc: "lorem20",
    avatar: "/images/avatar-1.png",
  },
];

const Testimonials = () => {
  useEffect(() => {
    // testimonials variables
    const testimonialsItem = document.querySelectorAll(
      "[data-testimonials-item]"
    );
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    // modal variable
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    // modal toggle function
    const testimonialsModalFunc = function () {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    // add click event to all modal items
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector(
          "[data-testimonials-title]"
        ).innerHTML;
        modalText.innerHTML = this.querySelector(
          "[data-testimonials-text]"
        ).innerHTML;

        testimonialsModalFunc();
      });
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
  }, []);

  return (
    <>
      <section class="testimonials">
        <h3 class="h3 testimonials-title">Testimonials</h3>

        <ul class="testimonials-list has-scrollbar">
          {testimonials &&
            testimonials.map((item, index) => {
              return (
                <li key={index} class="testimonials-item">
                  <div class="content-card" data-testimonials-item>
                    <figure class="testimonials-avatar-box">
                      <img
                        src={item.avatar}
                        alt="Daniel lewis"
                        width="60"
                        data-testimonials-avatar
                      />
                    </figure>

                    <h4
                      class="h4 testimonials-item-title"
                      data-testimonials-title
                    >
                      {item.title}
                    </h4>

                    <div class="testimonials-text" data-testimonials-text>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>


      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">
          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img
                src="/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
