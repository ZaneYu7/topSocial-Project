import "./index.css"


import { cards, highline, profile, message, request } from "./data/db.json"

import {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchbar,
  navbar_container_create,
  navbar_container_create_img,
  main,
  main_container,
  left,
  left_profile,
  left_profile_img,
  left_profile_name,
  left_profile_at,
  middle,
  middle_highline,
  middle_highline_description,
  middle_highline_description_p,
  middle_highline_description_img,
  middle_form,
  middle_form_img,
  middle_form_input_text,
  create_card_list,
  create_friend_list,
  create_request_list
} from "./src/js/common"

/* Nav */

navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src


/* Main Left */
left_profile_img.src = profile.img_src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at


/* Main Middle Highline */
middle_highline_description.forEach((element, index) => {
  element.style.backgroundImage = `url("/images/highline/highline_${index + 1}.jpeg")`
})

middle_highline_description_p.forEach((element, index) => {
  element.innerHTML = highline.description[index]
})

middle_highline_description_img.forEach((element, index) => {
  element.src = `/images/profile/profile_${index + 2}.png`
})

/* Main Middle Form */
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}?`

/* Main Middle Card*/
const cardDom = document.querySelector('.card')
create_card_list(cardDom, cards)

/* Main Right Message */
const messageDom = document.querySelector('.friend-list')
create_friend_list(messageDom, message)

/* Main Right Request */
const requestDom = document.querySelector('.request-list')
create_request_list(requestDom, request)