/*                                     Header                                  */

document.querySelector('.my_name').innerHTML += `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('.my_job').innerHTML += `${data.job_title}`;

/*                                   left block                                    */
/*                                  left block header                              */
document.querySelector('.my-photo').src = data.photo
document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="maito:${data.email}">${data.email}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto.skype.${data.skype}">${data.skype}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="#">${data.linkedin}</a></li>`
document.querySelector(".addres").innerHTML = `<p>${data.addres}</p>`;


/*                                      SKILLS                                    */
let skillsData = '';
data.skills.forEach(item => {
  skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;
/*                                     education                                    */
let educationData = '';
data.Education.forEach(item => {
  educationData += `<li>${item[0]},${item[1]}</li>`
})
document.querySelector('.education-list').innerHTML += educationData;
/*                                   achievements                                      */
let achievementsData = '';
data.Achievements.forEach(item => {
  achievementsData += `<li>${data.Achievements}`
})
document.querySelector('.achievements-list').innerHTML += achievementsData;

/*                               profile                                                 */
document.querySelector('.profile_text').innerHTML += `<p>${data.profile}</p>`;
/*                              experience                                      */
let experienceData = '';
experience.forEach(item => {
  experienceData += `<section class="mb-5">`;
  experienceData += `<h4 class="company-name mb-2">COMPANY NAME - ${item.company},<i> ${item.city} ${item.from} - ${item.to}</i></h4>`;
  experienceData += `<h5>${item.position}</h5>`;
  experienceData += `<p>${item.descripyion}</p>`
  experienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML += experienceData;