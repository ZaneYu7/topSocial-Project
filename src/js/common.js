/* Nav */
export const navbar = document.querySelector('nav')
export const navbar_container = navbar.querySelector('.container')
export const navbar_container_logo = navbar_container.querySelector('.logo')
export const navbar_container_searchbar = navbar_container.querySelector('.search-bar')
export const navbar_container_create = navbar_container.querySelector('.create')
export const navbar_container_create_img = navbar_container.querySelector('img')

/* Main */
export const main = document.querySelector('main')
export const main_container = main.querySelector('.container')

/* Main Left */
export const left = main_container.querySelector('.main-left')
export const left_profile = left.querySelector('.profile')
export const left_profile_img = left.querySelector('img')
export const left_profile_name = left.querySelector('h2')
export const left_profile_at = left.querySelector('p')

/* Main Middle */
export const middle = document.querySelector('.main-middle')

/* Main Middle Highline */
export const middle_highline = middle.querySelector('.highline')
export const middle_highline_description = middle_highline.querySelectorAll('.description')
export const middle_highline_description_img = middle_highline.querySelectorAll('.description img')
export const middle_highline_description_p = middle_highline.querySelectorAll('.description p')

/* Main Middle Form */
export const middle_form = middle.querySelector('form')
export const middle_form_img = middle_form.querySelector("img")
export const middle_form_input_text = middle_form.querySelector("#create-post")

/* Main Card */
export const middle_card = middle.querySelector('.card')

function createDom(type) {
  return document.createElement(type || 'div')
}

export const create_news = () => {
  const doms = {
    info: createDom(),
    info_profile: createDom(),
    info_picture: createDom(),
    info_control: createDom(),
    info_comment: createDom()
  }

  doms.info.classList.add('info')
  doms.info_profile.classList.add('info-profile')
  doms.info_picture.classList.add('info-picture')
  doms.info_control.classList.add('info-control')
  doms.info_comment.classList.add('info-comment')

  doms.info.appendChild(doms.info_profile)
  doms.info.appendChild(doms.info_picture)
  doms.info.appendChild(doms.info_control)
  doms.info.appendChild(doms.info_comment)

  return doms
}

export const create_profile_structure = (profile_dom, info) => {
  console.log(info)
  const profile = createDom()
  profile.classList.add('profile')
  profile.innerHTML = `
  <div class="profile-photo">
    <img alt="profile photo">
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
  </div>
  `
  const setting = createDom('i')
  setting.className = 'uil uil-ellipsis-h'
  profile_dom.appendChild(profile)
  profile_dom.appendChild(setting)

  profile.querySelector('img').src = info.src
  profile.querySelector('h2').textContent = info.name
  profile.querySelector('p').textContent = `${info.position}, ${info.time}`
}

export const create_picture_structure = (picture_dom, info) => {
  // console.log(picture_dom, info);
  const picture = createDom('img')
  picture.setAttribute('width', '100%')
  picture.src = info.img_src
  picture_dom.appendChild(picture)
}